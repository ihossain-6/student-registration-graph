import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { StudentAdded } from "../generated/schema"
import { StudentAdded as StudentAddedEvent } from "../generated/StudentRegistration/StudentRegistration"
import { handleStudentAdded } from "../src/student-registration"
import { createStudentAddedEvent } from "./student-registration-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let name = "Example string value"
    let email = "Example string value"
    let imgHash = "Example string value"
    let newStudentAddedEvent = createStudentAddedEvent(id, name, email, imgHash)
    handleStudentAdded(newStudentAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("StudentAdded created and stored", () => {
    assert.entityCount("StudentAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "email",
      "Example string value"
    )
    assert.fieldEquals(
      "StudentAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "imgHash",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
