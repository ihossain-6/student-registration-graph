import { StudentAdded as StudentAddedEvent } from "../generated/StudentRegistration/StudentRegistration"
import { StudentAdded } from "../generated/schema"
import { BigInt} from "@graphprotocol/graph-ts"

export function handleStudentAdded(event: StudentAddedEvent): void {
  let studentAdded = StudentAdded.load (
    getIdFromEventParams(event.params.id, event.params.email)
  )

  if(!studentAdded) {
    studentAdded = new StudentAdded (
      getIdFromEventParams(event.params.id, event.params.email)
    )
  }

  studentAdded.sId = event.params.id
  studentAdded.name = event.params.name
  studentAdded.email = event.params.email
  studentAdded.imgHash = event.params.imgHash

  studentAdded.save()
}

function getIdFromEventParams(sId: BigInt, email: String) : string {
  return sId.toHexString() + email
}


