"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const forgotPasswordSchema = z.object({
    email: z.string().email("Enter a valid email address."),
})

type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>

export const ForgotPasswordForm = () => {
    const form = useForm<ForgotPasswordInput>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: ForgotPasswordInput) {
        console.log(values)
        // Call your API here to send the reset-password email.
    }

    return (
        <main className="flex items-center justify-center px-4 py-16">
            <Card className="w-full max-w-110 rounded-md border border-zinc-100 bg-white py-3 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <CardHeader className="items-center px-5 pb-5 pt-2 text-center">
                    <CardTitle className="text-3xl font-bold tracking-tight text-zinc-900">
                        Forgot Password
                    </CardTitle>

                    <CardDescription className="w-full text-sm leading-6 text-zinc-500 ">
                        Enter your email address and we&apos;ll send you a link to reset your password.
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-5 pb-5">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email" className="sr-only">
                                    Email address
                                </FieldLabel>

                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    aria-invalid={!!form.formState.errors.email}
                                    className="h-11 rounded-md border-zinc-200 placeholder:text-zinc-400 focus-visible:ring-green-500"
                                    {...form.register("email")}
                                />

                                {form.formState.errors.email && (
                                    <FieldError errors={[form.formState.errors.email]} />
                                )}
                            </Field>
                        </FieldGroup>

                        <Button
                            type="submit"
                            className="h-10 w-full rounded-full bg-green-500 text-sm font-semibold text-white hover:bg-green-600"
                        >
                            Send Reset Link
                        </Button>

                        <p className="pt-2 text-center text-xs text-zinc-500">
                            Remember your password?{" "}
                            <Link
                                href="/login"
                                className="font-semibold text-zinc-800 hover:text-green-600"
                            >
                                Back to Login
                            </Link>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}