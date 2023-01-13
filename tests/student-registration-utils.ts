import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { StudentAdded } from "../generated/StudentRegistration/StudentRegistration"

export function createStudentAddedEvent(
  id: BigInt,
  name: string,
  email: string,
  imgHash: string
): StudentAdded {
  let studentAddedEvent = changetype<StudentAdded>(newMockEvent())

  studentAddedEvent.parameters = new Array()

  studentAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  studentAddedEvent.parameters.push(
    new ethereum.EventParam("imgHash", ethereum.Value.fromString(imgHash))
  )

  return studentAddedEvent
}
