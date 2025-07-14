"use client"

import { useState } from "react"
import { Copy, Info, Plus, TrendingUp, Users, Wallet, Star, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function ReferralPage() {
  const [expandedReferrals, setExpandedReferrals] = useState(false)

  const referralData = [
    { id: 3, code: "#IRYMEN", users: 0, rewards: 0, link: "https://pro.bananagun.io/app?referral=#IRYMEN" },
    { id: 4, code: "#UDC3K4F5", users: 0, rewards: 0, link: "https://pro.bananagun.io/app?referral=#UDC3K4F5" },
    { id: 5, code: "#X_7817", users: 0, rewards: 0, link: "https://pro.bananagun.io/app?referral=#X_7817" },
    { id: 6, code: "#2N2CPUOC", users: 0, rewards: 0, link: "https://pro.bananagun.io/app?referral=#2N2CPUOC" },
    { id: 1, code: "#DMYHUB", users: 0, rewards: 0, link: "https://pro.bananagun.io/app?referral=#DMYHUB" },
    { id: 2, code: "#J7S8T01", users: 0, rewards: 0, link: "https://pro.bananagun.io/app?referral=#J7S8T01" },
  ]

  const userLevel = 1
  const referralPercentage = 15 + userLevel * 5 // Base 15% + 5% per level
  const nextLevelPercentage = referralPercentage + 5
  const progressToNextLevel = 65 // Example progress

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const visibleReferrals = expandedReferrals ? referralData : referralData.slice(0, 3)

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Level and Referral Percentage */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-xl">🐵</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold">MONKEY</h2>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>Level {userLevel}</span>
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">
                    {referralPercentage}% Referral Rate
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Level Progress */}
          <div className="text-right">
            <div className="text-sm text-gray-400 mb-1">Next Level: {nextLevelPercentage}% Rate</div>
            <div className="flex items-center gap-2">
              <Progress value={progressToNextLevel} className="w-32 h-2" />
              <span className="text-xs text-gray-400">{progressToNextLevel}%</span>
            </div>
          </div>
        </div>

        {/* Main Title with Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="referrals" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-gray-900 border border-gray-800">
                <TabsTrigger value="referrals" className="text-lg px-6 py-3">
                  BANANA REFERRALS
                </TabsTrigger>
                <TabsTrigger value="bonus" className="text-lg px-6 py-3" disabled>
                  BANANA BONUS
                </TabsTrigger>
                <TabsTrigger value="tasks" className="text-lg px-6 py-3" disabled>
                  TASKS
                </TabsTrigger>
              </TabsList>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="border-gray-700 bg-transparent">
                    <Info className="w-4 h-4 mr-2" />
                    How it works
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 border-gray-700 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-yellow-400">How Referrals Work</DialogTitle>
                    <DialogDescription className="text-gray-300">
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Earning Referral Rewards</h4>
                          <p>
                            Share your referral links and earn {referralPercentage}% of all fees paid by users who sign
                            up through your link.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Level Up Benefits</h4>
                          <p>
                            As you level up, your referral percentage increases by 5% per level. Reach higher levels by
                            referring more active users.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Bot Integration</h4>
                          <p>
                            Integrate referral tracking into your trading bot by using our API endpoints. Contact
                            support for integration documentation.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Claiming Rewards</h4>
                          <p>
                            Rewards are automatically calculated and can be claimed once they reach the minimum
                            threshold of 0.01 Ξ.
                          </p>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            <TabsContent value="referrals" className="space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-400">Total Users</p>
                        <p className="text-xl font-bold">3</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-sm text-gray-400">Total Earned</p>
                        <p className="text-xl font-bold">0.03 Ξ</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-sm text-gray-400">Claimed</p>
                        <p className="text-xl font-bold">0 Ξ</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-sm text-gray-400">Referral Rate</p>
                        <p className="text-xl font-bold text-yellow-400">{referralPercentage}%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Referral Links */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Your Referral Links</h3>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Referral
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {visibleReferrals.map((referral) => (
                    <Card key={referral.id} className="bg-gray-900 border-gray-800">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm font-medium">REFERRAL LINK {referral.id}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            CODE: {referral.code}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2 p-2 bg-gray-800 rounded text-xs">
                          <span className="flex-1 truncate">{referral.link}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(referral.link)}
                            className="h-6 w-6 p-0"
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">USERS</p>
                            <p className="font-semibold">{referral.users}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">REWARDS</p>
                            <p className="font-semibold text-yellow-400">{referral.rewards} Ξ</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {referralData.length > 3 && (
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      onClick={() => setExpandedReferrals(!expandedReferrals)}
                      className="border-gray-700"
                    >
                      {expandedReferrals ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          Show More ({referralData.length - 3} more)
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>

              <Separator className="bg-gray-800" />

              {/* Claimed Rewards Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Claimed Rewards</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>REFERRAL</span>
                    <span>REWARDS</span>
                  </div>
                </div>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-8 text-center">
                    <div className="text-gray-500 mb-4">
                      <Wallet className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    </div>
                    <p className="text-gray-400">NO DATA</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Your claimed rewards will appear here once you start earning
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Unclaimed Rewards */}
              <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-1">UNCLAIMED REWARDS</h3>
                      <p className="text-3xl font-bold text-yellow-400">0.03 Ξ</p>
                      <p className="text-sm text-gray-400 mt-1">Wallet: 9dsu8ZzMXGHqNS9JDQN...</p>
                    </div>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8">CLAIM</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bonus">
              <div className="text-center py-12">
                <p className="text-gray-400">Banana Bonus features coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="tasks">
              <div className="text-center py-12">
                <p className="text-gray-400">Task system coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
