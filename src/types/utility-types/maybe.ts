import { createUnionFactory } from "./union"
import { createLiteralFactory } from "./literal"
import { IType } from "../type"

const nullFactory = createLiteralFactory(null)

export function createMaybeFactory<S, T>(type: IType<S, T>): IType<S | null | undefined, T | null> {
    // TODO: is identifierAttr correct for maybe?
    return createUnionFactory(nullFactory, type)
}
