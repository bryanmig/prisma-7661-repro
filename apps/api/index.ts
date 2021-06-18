import * as workingClient from ".prisma/client";
import * as brokenClient from "@prisma/client";

export namespace Models {
    export type WorkingUser = workingClient.User;
    export type BrokenUser = brokenClient.User;
}