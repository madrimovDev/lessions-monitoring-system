import { object, schema, string, number } from "@verve-neowise/validius";

export const createTeacherSchema = schema(object({
    required: true,
    entries: {
        userId: number({
            required: true,
            min: 0
        }),
        name: string({
            required: true,
            min: 3
        }),
        surname: string({
            required: true,
            min: 3
        }),
        birthday: string({
            required: true,
            min: 3
        }),
        phone: string({
            required: true,
            min: 3
        })
    }
}))


export const updateTeacherSchema = schema(object({
    required: true,
    entries: {
        name: string({
            required: true,
            min: 3
        }),
        surname: string({
            required: true,
            min: 3
        }),
        birthday: string({
            required: true,
            min: 3
        }),
        phone: string({
            required: true,
            min: 3
        })
    }
}))