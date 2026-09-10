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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { registerSchema } from "@/schemas/auth/register.schema"

type RegisterInput = z.infer<typeof registerSchema>

export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const form = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            phone: "",
            role: undefined,
            password: "",
            confirmPassword: "",
            acceptTerms: false,
        },
    })

    function onSubmit(values: RegisterInput) {
        console.log(values)
    }

    return (
        <main className="flex items-center justify-center  px-4 py-16">
            <Card className="w-full max-w-110 rounded-md border border-zinc-100 bg-white py-3 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <CardHeader className="items-center px-5 pb-5 pt-2 text-center">
                    <CardTitle className="text-3xl font-bold tracking-tight text-zinc-900">
                        Create Account
                    </CardTitle>
                    <CardDescription className="sr-only">
                        Create your new account
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
                                            className="h-11 rounded-md border-zinc-200 placeholder:text-zinc-400 focus-visible:ring-green-500"
                                        />

                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="phone"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="phone" className="sr-only">
                                            Phone number
                                        </FieldLabel>

                                        <Input
                                            {...field}
                                            id="phone"
                                            type="tel"
                                            placeholder="Phone number"
                                            autoComplete="tel"
                                            aria-invalid={fieldState.invalid}
                                            className="h-11 rounded-md border-zinc-200 placeholder:text-zinc-400 focus-visible:ring-green-500"
                                        />

                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="role"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="role" className="sr-only">
                                            Account type
                                        </FieldLabel>

                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger
                                                id="role"
                                                aria-invalid={fieldState.invalid}
                                                className="h-11 w-full rounded-md border-zinc-200 text-zinc-500 focus:ring-green-500"
                                            >
                                                <SelectValue placeholder="Select account type" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                <SelectItem value="user">User</SelectItem>
                                                <SelectItem value="merchant">Merchant</SelectItem>
                                            </SelectContent>
                                        </Select>

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
                                                autoComplete="new-password"
                                                aria-invalid={fieldState.invalid}
                                                className="h-11 rounded-md border-zinc-200 pr-11 placeholder:text-zinc-400 focus-visible:ring-green-500"
                                            />

                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
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

                            <Controller
                                name="confirmPassword"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="confirmPassword" className="sr-only">
                                            Confirm password
                                        </FieldLabel>

                                        <div className="relative">
                                            <Input
                                                {...field}
                                                id="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Confirm Password"
                                                autoComplete="new-password"
                                                aria-invalid={fieldState.invalid}
                                                className="h-11 rounded-md border-zinc-200 pr-11 placeholder:text-zinc-400 focus-visible:ring-green-500"
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowConfirmPassword(!showConfirmPassword)
                                                }
                                                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-zinc-500 hover:text-zinc-800"
                                                aria-label={
                                                    showConfirmPassword
                                                        ? "Hide confirm password"
                                                        : "Show confirm password"
                                                }
                                            >
                                                {showConfirmPassword ? (
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

                        <Controller
                            name="acceptTerms"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <label className="flex cursor-pointer items-center gap-2 text-xs text-zinc-500">
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="size-4 rounded-sm border-zinc-300"
                                        />
                                        <span>
                                            I accept all{" "}
                                            <Link
                                                href="/terms"
                                                className="hover:text-green-600 hover:underline"
                                            >
                                                terms & conditions
                                            </Link>
                                        </span>
                                    </label>

                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Button
                            type="submit"
                            className="h-10 w-full rounded-full bg-green-500 text-sm font-semibold text-white hover:bg-green-600"
                        >
                            Create Account
                        </Button>

                        <p className="pt-2 text-center text-xs text-zinc-500">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-semibold text-zinc-800 hover:text-green-600"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}