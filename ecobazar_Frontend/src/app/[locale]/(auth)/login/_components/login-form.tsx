"use client"

import Link from "next/link"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { loginSchema } from "@/schemas/auth/login.schema"

type LoginInput = z.infer<typeof loginSchema>

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: LoginInput) {
        console.log(values)
    }

    return (
        <main className="flex  items-center justify-center px-4 py-16">
            <Card className="w-full max-w-110 rounded-md border border-zinc-100 bg-white py-3 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <CardHeader className="items-center px-5 pb-5 pt-2 text-center">
                    <CardTitle className="text-3xl font-bold tracking-tight text-zinc-900">
                        Sign In
                    </CardTitle>
                    <CardDescription className="sr-only">
                        Sign in to your account
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-5 pb-5">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FieldGroup className="gap-2.5">
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="email" className="sr-only">
                                            Email
                                        </FieldLabel>

                                        <Input
                                            {...field}
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            autoComplete="email"
                                            aria-invalid={fieldState.invalid}
                                            className="h-11 rounded-md border-zinc-200 px-3 text-sm placeholder:text-zinc-400 focus-visible:ring-green-500"
                                        />

                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="password"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="password" className="sr-only">
                                            Password
                                        </FieldLabel>

                                        <div className="relative">
                                            <Input
                                                {...field}
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                autoComplete="current-password"
                                                aria-invalid={fieldState.invalid}
                                                className="h-11 rounded-md border-zinc-200 px-3 pr-11 text-sm placeholder:text-zinc-400 focus-visible:ring-green-500"
                                            />

                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((current) => !current)}
                                                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-zinc-500 hover:text-zinc-800"
                                                aria-label={showPassword ? "Hide password" : "Show password"}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="size-4" />
                                                ) : (
                                                    <Eye className="size-4" />
                                                )}
                                            </button>
                                        </div>

                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>

                        <div className="flex items-center justify-between pt-0.5 text-xs text-zinc-500">
                            <label className="flex cursor-pointer items-center gap-2">
                                <Checkbox className="size-4 rounded-sm border-zinc-300" />
                                <span>Remember me</span>
                            </label>

                            <Link
                                href="/forgot-password"
                                className="hover:text-green-600 hover:underline"
                            >
                                Forgot Password
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            className="h-10 w-full hover:bg-green-600"
                        >
                            Login
                        </Button>

                        <p className="pt-2 text-center text-xs text-zinc-500">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/register"
                                className="font-semibold text-zinc-800 hover:text-green-600"
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}