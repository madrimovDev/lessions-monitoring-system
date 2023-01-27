import { object, schema, string } from "@verve-neowise/validius";

export const lessonSchema = schema(object({
    entries: {
        title: string({
            required: true
        }),
        date: string({
            required: true
        })
    }
}))