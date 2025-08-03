"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const FormSchema = z.object({
    type: z.enum(["one", "two"],),
})


export function RadioGroupForm() {
    const router = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            type: "one",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
        // Redirect based on selected option
        if (data.type === "one") {
            router.push("https://buy.stripe.com/7sY28raliasH8618324Vy03")
        } else if (data.type === "two") {
            router.push("https://buy.stripe.com/14AbJ150YbwLcmhgzy4Vy04")
        }
        toast("You submitted the following values", {
            description: (
                <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                        <CardTitle>Limited places</CardTitle>
                        <CardDescription>
                            Located on Crystal Café - barrhaven. Last day for registration on Wednesday 16th.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Select the special offer</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-col"
                                        >
                                            <FormItem className="flex items-center gap-3">
                                                <FormControl>
                                                    <RadioGroupItem value="one" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    One person($65)
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center gap-3">
                                                <FormControl>
                                                    <RadioGroupItem value="two" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Two people ($115) <span className="text-red-500 font-bold">15% discount </span>
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </form>
                    </Form>

                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="button" onClick={form.handleSubmit(onSubmit)} className="w-full bg-[#d3afab] hover:bg-gray-500 cursor-pointer">
                            Join us
                        </Button>
                    </CardFooter>
        </Card>
    )
}
