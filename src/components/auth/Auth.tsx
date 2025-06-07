'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SignupForm from './SignUp'
import LoginForm from './Login'
import CreatePasswordForm from './CreatePassword'
import ForgotPasswordForm from './ForgotPassword'
import VerifyEmailForm from './VerifyPassword'

type FormType = 'signup' | 'login' | 'createPassword' | 'forgotPassword' | 'verifyEmail' | 'home'

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  rememberMe: boolean
  verificationCode: string[]
}

const AuthForms = () => {
  const [currentForm, setCurrentForm] = useState<FormType>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    verificationCode: ['', '', '', '']
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...formData.verificationCode]
      newCode[index] = value
      setFormData(prev => ({
        ...prev,
        verificationCode: newCode
      }))
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleSignup = () => {
    console.log('Signup submitted:', formData)
    setCurrentForm('createPassword')
  }

  const handleLogin = () => {
    console.log('Login submitted:', formData)
    setCurrentForm('home')
  }

  const handleCreatePassword = () => {
    console.log('Password created:', formData)
    setCurrentForm('verifyEmail')
  }

  const handleForgotPassword = () => {
    console.log('Password reset requested:', formData)
    setCurrentForm('verifyEmail')
  }

  const handleVerifyEmail = () => {
    console.log('Email verified:', formData.verificationCode.join(''))
    setCurrentForm('home')
  }

  const handleResendCode = () => {
    console.log('Resending verification code...')
  }

  const handleGoogleSignIn = () => {
    console.log('Signing in with Google...')
  }

  if (currentForm === 'home') {
    window.location.href = '/'; // Redirect to home page
  }

  
  const getFormTitle = () => {
    switch (currentForm) {
      case 'signup': return 'Sign in'
      case 'login': return 'Log in'
      case 'createPassword': return 'Create New Password'
      case 'forgotPassword': return 'Forgot Password?'
      case 'verifyEmail': return 'Verify Your Email'
      default: return 'Sign in'
    }
  }

  const getFormSubtitle = () => {
    switch (currentForm) {
      case 'signup': return 'See your growth and get consulting support!'
      case 'login': return 'See your growth and get consulting support!'
      case 'createPassword': return 'Your new password must be different from previously used password'
      case 'forgotPassword': return 'No worries, we\'ll send you reset instructions.'
      case 'verifyEmail': return `Enter the 4 digit code sent to ${formData.email || 'creativeitem@gmail.com'}`
      default: return 'See your growth and get consulting support!'
    }
  }

  const getCurrentForm = () => {
    switch (currentForm) {
      case 'signup': return (
        <SignupForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSignup={handleSignup}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          setCurrentForm={setCurrentForm}
        />
      )
      case 'login': return (
        <LoginForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          setCurrentForm={setCurrentForm}
          handleGoogleSignIn={handleGoogleSignIn}
        />
      )
      case 'createPassword': return (
        <CreatePasswordForm
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
          formData={formData}
          handleInputChange={handleInputChange}
          setShowPassword={setShowPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          handleCreatePassword={handleCreatePassword}
        />
      )
      case 'forgotPassword': return (
        <ForgotPasswordForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleForgotPassword={handleForgotPassword}
        />
      )
      case 'verifyEmail': return (
        <VerifyEmailForm
          formData={formData}
          handleCodeChange={handleCodeChange}
          handleResendCode={handleResendCode}
          handleVerifyEmail={handleVerifyEmail}
        />
      )
      default: return (
        <LoginForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          setCurrentForm={setCurrentForm}
          handleGoogleSignIn={handleGoogleSignIn}
        />
      )
    }
  }

  return (
    <div className="min-h-screen   lg:pt-10 pb-20  max-w-[1139px] mx-auto text-[#051625]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Authentication Forms */}
            <div className='flex flex-col gap-26 h-fit '>
              <div className="space-y-8 max-w-md mx-auto lg:mx-0">
                {/* Header */}
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {getFormTitle()}
                  </h2>
                  <p className="text-gray-600">
                    {getFormSubtitle()}
                  </p>
                </div>

                {/* Dynamic Form Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentForm}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {getCurrentForm()}
                  </motion.div>
                </AnimatePresence>

                {/* Copyright */}
              </div>
              <p className=" text-sm text-gray-500">
                © 2021 All Rights Reserved
              </p>

            </div>

            {/* Right side - Original Image */}
            {/* <div className="relative aspect-square lg:aspect-auto lg:h-full">
              <Image
                src="/auth/loginImage.svg"
                alt="Hero cleaning equipment"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div> */}
             <div className="relative hidden lg:flex aspect-square  lg:h-[590px] lg:w-[560px]">
              <Image
                src="/auth/loginImage.svg"
                alt="Hero cleaning equipment"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForms