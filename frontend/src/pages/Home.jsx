import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Facebook, Instagram, Twitter, ShoppingCart, Zap, Globe, BarChart, DollarSign, Users, Star } from 'lucide-react'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-blue-900">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-200">
        <Link className="flex items-center justify-center" href="#">
          <ShoppingCart className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-blue-900">Social2Amazon</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-900">
                  From Social Media to Amazon Listings in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-700 md:text-xl">
                  Automatically create Amazon listings from your social media profiles using AI. Streamline your e-commerce business today.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Zap className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">AI-Powered Listings</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-700">Generate optimized Amazon listings using advanced AI technology.</CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Globe className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Multi-Platform Support</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-700">Connect and monitor multiple social media profiles in one place.</CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <BarChart className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Automated Monitoring</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-700">Stay updated with real-time monitoring of your social media content.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-4xl font-bold text-blue-600">1</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Connect Your Profiles</h3>
                <p className="text-blue-700">Link your social media accounts to our platform.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-4xl font-bold text-blue-600">2</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">AI Analysis</h3>
                <p className="text-blue-700">Our AI analyzes your content and creates optimized listings.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-4xl font-bold text-blue-600">3</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">List on Amazon</h3>
                <p className="text-blue-700">Approve and publish your new listings on Amazon with one click.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900">Testimonials</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@johndoe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-blue-900">John Doe</CardTitle>
                      <CardDescription className="text-blue-600">Social Media Influencer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-blue-700">
                  "This app has revolutionized how I manage my e-commerce business. It's a game-changer!"
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@janedoe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-blue-900">Jane Doe</CardTitle>
                      <CardDescription className="text-blue-600">Small Business Owner</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-blue-700">
                  "The AI-generated listings are spot-on. It's like having a team of experts working for me 24/7."
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@alexsmith" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-blue-900">Alex Smith</CardTitle>
                      <CardDescription className="text-blue-600">E-commerce Entrepreneur</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-blue-700">
                  "The time I save with this app allows me to focus on growing my business. Highly recommended!"
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-900">Pricing Plans</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Basic</CardTitle>
                  <CardDescription className="text-blue-600">For small businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-blue-900">$29/mo</div>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> 1 Social Media Account</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> 50 Listings/month</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Basic AI Analysis</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Pro</CardTitle>
                  <CardDescription className="text-blue-600">For growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-blue-900">$79/mo</div>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> 3 Social Media Accounts</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> 200 Listings/month</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Advanced AI Analysis</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Enterprise</CardTitle>
                  <CardDescription className="text-blue-600">For large businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-blue-900">Custom</div>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Unlimited Social Media Accounts</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Unlimited Listings</li>
                    <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Custom AI Solutions</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Streamline Your E-commerce?</h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of successful sellers who have transformed their business with our AI-powered platform.
                </p>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200">
        <p className="text-xs text-blue-700">© 2023 Social2Amazon. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-blue-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-blue-600" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default Home