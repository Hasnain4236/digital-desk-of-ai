"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { isSellerEmail, SELLER_CREDENTIALS } from '@/lib/sellerConfig'
import { Eye, EyeOff, Mail, Lock, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/components/ui/use-toast'

export default function SellerLoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Check if credentials match the seller account
    if (formData.email.toLowerCase() !== SELLER_CREDENTIALS.email.toLowerCase()) {
      toast({
        title: "Access Denied",
        description: "This email is not registered as a seller account.",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    if (formData.password !== SELLER_CREDENTIALS.password) {
      toast({
        title: "Invalid Password",
        description: "The password you entered is incorrect.",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    try {
      // Try Firebase auth first
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
      toast({
        title: "Welcome, Seller!",
        description: "You have successfully logged into the seller dashboard.",
      })
      router.push('/seller/dashboard')
    } catch (error: any) {
      // If Firebase fails but credentials match, allow login via localStorage
      if (
        formData.email.toLowerCase() === SELLER_CREDENTIALS.email.toLowerCase() &&
        formData.password === SELLER_CREDENTIALS.password
      ) {
        localStorage.setItem("sellerAuth", JSON.stringify({
          email: formData.email,
          isAuthenticated: true,
          timestamp: Date.now(),
        }))
        toast({
          title: "Welcome, Seller!",
          description: "You have successfully logged into the seller dashboard.",
        })
        router.push('/seller/dashboard')
      } else {
        toast({
          title: "Login failed",
          description: error.message || "Please check your credentials.",
          variant: "destructive",
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Store className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Seller Login</CardTitle>
          <CardDescription>
            Access your seller dashboard to manage products
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seller@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link 
                href="/seller/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In to Dashboard'}
            </Button>
          </form>

          <Separator className="my-6" />

          <div className="text-center text-sm text-muted-foreground">
            <p>Want to become a seller?</p>
            <Link href="/seller/register" className="text-primary hover:underline font-medium">
              Apply for Seller Account
            </Link>
          </div>

          <Separator className="my-6" />

          <p className="text-center text-sm">
            <Link href="/login" className="text-muted-foreground hover:text-primary">
              ← Back to Customer Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
