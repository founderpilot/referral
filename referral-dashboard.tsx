"use client"

import { useState } from "react"
import {
  Copy,
  Edit3,
  ChevronDown,
  Info,
  TrendingUp,
  Users,
  Star,
  ChevronUp,
  Wallet,
  Trophy,
  Target,
  Gift,
  Zap,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"

// Solana Icon Component
const SolanaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 397.7 311.7" className={className} fill="currentColor">
    <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 237.9z" />
    <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1L333.1 73.8c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" />
    <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" />
  </svg>
)

// Banana Icon Component
const BananaIcon = ({ className }: { className?: string }) => <span className={className}>🍌</span>

export default function ReferralDashboard() {
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [expandedReferrals, setExpandedReferrals] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState("9dsu8ZzMXGHqNS9JDQN...")
  const [claimableAmount, setClaimableAmount] = useState(0.03)
  const [bananaBonus, setBananaBonus] = useState(1250)
  const [bananaProgress, setBananaProgress] = useState(75)
  const [tasksCompleted, setTasksCompleted] = useState(3)
  const [totalTasks, setTotalTasks] = useState(8)
  const { toast } = useToast()
  const [showLevelDialog, setShowLevelDialog] = useState(false)

  const referralData = [
    { id: 3, code: "#IRYMEN", users: 2, rewards: 0.15, link: "https://pro.bananagun.io/app?referral=#IRYMEN" },
    { id: 4, code: "#UDC3K4F5", users: 0, rewards: 0, link: "https://pro.bananagun.io/app?referral=#UDC3K4F5" },
    { id: 5, code: "#X_7817", users: 1, rewards: 0.08, link: "https://pro.bananagun.io/app?referral=#X_7817" },
    { id: 6, code: "#2N2CPUOC", users: 0, rewards: 0, link: "https://pro.bananagun.io/app?referral=#2N2CPUOC" },
    { id: 1, code: "#DMYHUB", users: 3, rewards: 0.22, link: "https://pro.bananagun.io/app?referral=#DMYHUB" },
    { id: 2, code: "#J7S8T01", users: 1, rewards: 0.05, link: "https://pro.bananagun.io/app?referral=#J7S8T01" },
  ]

  const claimedRewards = [
    { id: 1, time: "2024-01-15 14:30", referral: "#IRYMEN", amount: 0.12, txHash: "5K7x..." },
    { id: 2, time: "2024-01-14 09:15", referral: "#DMYHUB", amount: 0.08, txHash: "3M9z..." },
    { id: 3, time: "2024-01-13 16:45", referral: "#X_7817", amount: 0.05, txHash: "7N2w..." },
  ]

  const tasks = [
    {
      id: 1,
      title: "Complete First Trade",
      description: "Execute your first trade on Banana Gun",
      reward: 100,
      completed: true,
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "Refer 3 Friends",
      description: "Get 3 people to sign up using your referral",
      reward: 250,
      completed: true,
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: 3,
      title: "Trade Volume $1000",
      description: "Reach $1000 in total trading volume",
      reward: 500,
      completed: true,
      icon: <Target className="w-4 h-4" />,
    },
    {
      id: 4,
      title: "Daily Login Streak",
      description: "Login for 7 consecutive days",
      reward: 150,
      completed: false,
      progress: 5,
      maxProgress: 7,
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      id: 5,
      title: "Use Advanced Features",
      description: "Try MEV protection and limit orders",
      reward: 200,
      completed: false,
      icon: <Zap className="w-4 h-4" />,
    },
    {
      id: 6,
      title: "Join Community",
      description: "Join our Discord and Telegram",
      reward: 100,
      completed: false,
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: 7,
      title: "High Profit Trade",
      description: "Make a trade with >50% profit",
      reward: 300,
      completed: false,
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      id: 8,
      title: "Refer Power User",
      description: "Refer someone who trades >$5000",
      reward: 1000,
      completed: false,
      icon: <Star className="w-4 h-4" />,
    },
  ]

  const userLevel = 2
  const maxLevel = 4
  const referralPercentage = 15 + userLevel * 5 // Base 15% + 5% per level
  const nextLevelPercentage = referralPercentage + 5
  const progressToNextLevel = 65
  const peopleNeededForNextLevel = 7

  const copyToClipboard = async (text: string, id: number, type: "code" | "link") => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)

      toast({
        title: "Copied!",
        description: `Referral ${type} copied to clipboard`,
        duration: 3000,
      })
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
        duration: 3000,
      })
    }
  }

  const handleEdit = (id: number) => {
    toast({
      title: "Edit Referral",
      description: `Editing referral link ${id}`,
      duration: 3000,
    })
  }

  const handleClaim = () => {
    if (claimableAmount > 0) {
      toast({
        title: "Claim Successful!",
        description: `${claimableAmount} SOL claimed to your wallet`,
        duration: 3000,
      })
      setClaimableAmount(0)
    } else {
      toast({
        title: "No rewards to claim",
        description: "You need at least 0.01 SOL to claim",
        variant: "destructive",
        duration: 3000,
      })
    }
  }

  const handleClaimBanana = () => {
    if (bananaBonus >= 1000) {
      toast({
        title: "🍌 Banana Bonus Claimed!",
        description: `${bananaBonus} $BANANA tokens claimed successfully`,
        duration: 3000,
      })
      setBananaBonus(0)
      setBananaProgress(0)
    }
  }

  const handleTaskClaim = (taskId: number, reward: number) => {
    toast({
      title: "Task Completed!",
      description: `+${reward} $BANANA earned`,
      duration: 3000,
    })
    setBananaBonus((prev) => prev + reward)
  }

  const visibleReferrals = expandedReferrals ? referralData : referralData.slice(0, 3)

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[#101010] text-[#EAE8E1] p-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Header with Tabs */}
              <div className="mb-8">
                <Tabs defaultValue="referrals" className="w-full">
                  <div className="flex items-center justify-between mb-6">
                    <TabsList className="bg-[#1a1a1a] border border-[#333333] h-12">
                      <TabsTrigger
                        value="referrals"
                        className="text-lg font-bold px-6 py-3 data-[state=active]:bg-[#FFCE4F] data-[state=active]:text-black"
                      >
                        BANANA REFERRALS
                      </TabsTrigger>
                      <TabsTrigger
                        value="bonus"
                        className="text-lg font-bold px-6 py-3 data-[state=active]:bg-[#FFCE4F] data-[state=active]:text-black"
                      >
                        BANANA BONUS
                      </TabsTrigger>
                      <TabsTrigger
                        value="tasks"
                        className="text-lg font-bold px-6 py-3 data-[state=active]:bg-[#FFCE4F] data-[state=active]:text-black"
                      >
                        TASKS
                      </TabsTrigger>
                    </TabsList>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="lg"
                              className="border-[#FFCE4F]/30 bg-transparent text-[#EAE8E1] hover:bg-[#FFCE4F]/10 hover:border-[#FFCE4F] transition-all duration-200"
                            >
                              <Info className="w-5 h-5 mr-2" />
                              How it works
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Learn about referrals and bot integration</p>
                          </TooltipContent>
                        </Tooltip>
                      </DialogTrigger>
                      <DialogContent className="bg-[#1a1a1a] border-[#333333] text-[#EAE8E1] max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-[#FFCE4F] text-xl">How Referrals Work</DialogTitle>
                          <DialogDescription className="text-[#EAE8E1]/80">
                            <div className="space-y-6 mt-4">
                              <div>
                                <h4 className="font-semibold text-[#EAE8E1] mb-2 flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-[#FFCE4F]" />
                                  Earning Referral Rewards
                                </h4>
                                <p>
                                  Share your referral links and earn {referralPercentage}% of all fees paid by users who
                                  sign up through your link. Your rate increases with each level!
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#EAE8E1] mb-2 flex items-center gap-2">
                                  <Star className="w-4 h-4 text-[#FFCE4F]" />
                                  Level Up Benefits
                                </h4>
                                <p>
                                  Level 1: 20% • Level 2: 25% • Level 3: 30% • Level 4: 35%
                                  <br />
                                  Reach higher levels by referring more active users who generate volume.
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#EAE8E1] mb-2 flex items-center gap-2">
                                  <Users className="w-4 h-4 text-[#FFCE4F]" />
                                  Bot Integration
                                </h4>
                                <p>
                                  Integrate referral tracking into your trading bot using our API endpoints. Contact
                                  support for integration documentation and webhook setup.
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#EAE8E1] mb-2 flex items-center gap-2">
                                  <SolanaIcon className="w-4 h-4 text-[#FFCE4F]" />
                                  Claiming Rewards
                                </h4>
                                <p>
                                  Rewards are automatically calculated and can be claimed once they reach the minimum
                                  threshold of 0.01 SOL. Claims are processed instantly to your connected wallet.
                                </p>
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <TabsContent value="referrals" className="space-y-6">
                    {/* Referral Cards Grid */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-[#EAE8E1]">Your Referral Links</h3>
                        <div className="text-sm text-[#666666]">
                          {referralData.length} total links •{" "}
                          {referralData.length > 3 && !expandedReferrals ? "3 shown" : "all shown"}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {visibleReferrals.map((referral) => (
                          <Card
                            key={referral.id}
                            className="bg-[#1a1a1a] border border-[#333333] hover:border-[#FFCE4F]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#FFCE4F]/10"
                          >
                            <CardContent className="p-4 space-y-4">
                              {/* Header */}
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-[#EAE8E1]">REFERRAL LINK {referral.id}</span>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      onClick={() => handleEdit(referral.id)}
                                      className="text-[#666666] hover:text-[#FFCE4F] transition-colors duration-200"
                                    >
                                      <Edit3 className="w-4 h-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Edit referral link</p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>

                              {/* URL with Copy */}
                              <div className="flex items-center gap-2">
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      onClick={() => copyToClipboard(referral.link, referral.id, "link")}
                                      className="flex-1 text-left font-mono text-xs text-[#666666] hover:text-[#FFCE4F] break-all transition-colors duration-200 p-2 bg-[#0a0a0a] rounded border border-[#333333] hover:border-[#FFCE4F]/30"
                                    >
                                      {referral.link}
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Click to copy full link</p>
                                  </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      onClick={() => copyToClipboard(referral.link, referral.id, "link")}
                                      className="text-[#666666] hover:text-[#FFCE4F] transition-colors duration-200 p-2 rounded hover:bg-[#FFCE4F]/10 flex-shrink-0"
                                    >
                                      <Copy className="w-4 h-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Copy referral link</p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>

                              {/* Code without Copy */}
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-[#666666]">
                                  CODE: <span className="text-[#EAE8E1] font-mono">{referral.code}</span>
                                </span>
                              </div>

                              {/* Stats */}
                              <div className="grid grid-cols-2 gap-4 pt-2">
                                <div>
                                  <div className="text-xs text-[#666666] mb-1">USERS</div>
                                  <div className="text-lg font-medium text-[#EAE8E1]">{referral.users}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-[#666666] mb-1">REWARDS</div>
                                  <div className="text-lg font-medium text-[#FFCE4F] flex items-center gap-1">
                                    {referral.rewards}
                                    <SolanaIcon className="w-4 h-4" />
                                  </div>
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
                            className="border-[#333333] bg-transparent text-[#EAE8E1] hover:bg-[#FFCE4F]/10 hover:border-[#FFCE4F] transition-all duration-200"
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

                    {/* Claimed Rewards Section */}
                    <div className="space-y-4 mt-12">
                      <h2 className="text-lg font-medium text-[#EAE8E1]">CLAIMED REWARDS</h2>

                      {/* Table Header */}
                      <div className="grid grid-cols-3 gap-4 px-4 py-3 text-xs text-[#666666] font-mono border-b border-[#333333] bg-[#0a0a0a] rounded-t">
                        <div className="flex items-center gap-1">
                          TIME
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="text-[#666666] hover:text-[#FFCE4F] transition-colors duration-200">
                                <ChevronDown className="w-3 h-3" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Sort by time</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="flex items-center gap-1">
                          REFERRAL
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="text-[#666666] hover:text-[#FFCE4F] transition-colors duration-200">
                                <ChevronDown className="w-3 h-3" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Sort by referral</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="flex items-center gap-1">
                          <SolanaIcon className="w-3 h-3 text-[#FFCE4F]" />
                          REWARDS
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="text-[#FFCE4F] hover:text-[#FFCE4F]/80 transition-colors duration-200">
                                <ChevronDown className="w-3 h-3" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Sort by rewards</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>

                      {/* Data Rows */}
                      <div className="bg-[#0a0a0a] rounded-b border border-t-0 border-[#333333]">
                        {claimedRewards.map((reward, index) => (
                          <div
                            key={reward.id}
                            className={`grid grid-cols-3 gap-4 px-4 py-3 text-sm font-mono ${index !== claimedRewards.length - 1 ? "border-b border-[#333333]" : ""}`}
                          >
                            <div className="text-[#EAE8E1]">{reward.time}</div>
                            <div className="text-[#FFCE4F]">{reward.referral}</div>
                            <div className="text-[#FFCE4F] flex items-center gap-1">
                              {reward.amount}
                              <SolanaIcon className="w-3 h-3" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="bonus" className="space-y-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-[#EAE8E1] flex items-center gap-2">
                          <BananaIcon className="text-2xl" />
                          Banana Bonus
                        </h3>
                        <Badge variant="outline" className="bg-[#FFCE4F]/20 text-[#FFCE4F] border-[#FFCE4F]/30">
                          Gamified Rewards
                        </Badge>
                      </div>

                      {/* Progress Card */}
                      <Card className="bg-gradient-to-r from-[#FFCE4F]/10 to-transparent border-[#FFCE4F]/30">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-lg font-semibold text-[#EAE8E1]">Current Bonus</h4>
                                <p className="text-sm text-[#666666]">Accumulated from trading and referrals</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-[#FFCE4F] flex items-center gap-2">
                                  {bananaBonus.toLocaleString()}
                                  <BananaIcon className="text-xl" />
                                </div>
                                <div className="text-sm text-[#666666]">$BANANA tokens</div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-[#666666]">Progress to next milestone</span>
                                <span className="text-[#FFCE4F]">{bananaProgress}%</span>
                              </div>
                              <Progress value={bananaProgress} className="h-3 bg-[#333333]" />
                              <div className="text-xs text-[#666666]">Next milestone: 2,000 $BANANA</div>
                            </div>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  className="w-full bg-[#FFCE4F] hover:bg-[#FFCE4F]/90 text-black font-medium"
                                  disabled={bananaBonus < 1000}
                                >
                                  <Gift className="w-4 h-4 mr-2" />
                                  Claim Bonus ({bananaBonus >= 1000 ? "Ready!" : "Need 1000+"})
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="bg-[#1a1a1a] border-[#333333] text-[#EAE8E1]">
                                <DialogHeader>
                                  <DialogTitle className="text-[#FFCE4F] flex items-center gap-2">
                                    <BananaIcon className="text-xl" />
                                    Claim Banana Bonus
                                  </DialogTitle>
                                  <DialogDescription className="text-[#EAE8E1]/80">
                                    <div className="space-y-4 mt-4">
                                      <div className="text-center">
                                        <div className="text-3xl font-bold text-[#FFCE4F] mb-2">
                                          {bananaBonus.toLocaleString()} $BANANA
                                        </div>
                                        <p>Ready to claim to your wallet</p>
                                      </div>
                                      <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                          <span>Trading Volume Bonus:</span>
                                          <span className="text-[#FFCE4F]">750 $BANANA</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span>Referral Bonus:</span>
                                          <span className="text-[#FFCE4F]">300 $BANANA</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span>Task Completion:</span>
                                          <span className="text-[#FFCE4F]">200 $BANANA</span>
                                        </div>
                                      </div>
                                      <Button
                                        onClick={handleClaimBanana}
                                        className="w-full bg-[#FFCE4F] hover:bg-[#FFCE4F]/90 text-black font-medium"
                                      >
                                        Claim Now
                                      </Button>
                                    </div>
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="bg-[#1a1a1a] border-[#333333]">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-5 h-5 text-[#FFCE4F]" />
                              <div>
                                <p className="text-sm text-[#666666]">Total Volume</p>
                                <p className="text-xl font-bold text-[#EAE8E1]">$12,450</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-[#1a1a1a] border-[#333333]">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                              <Trophy className="w-5 h-5 text-green-400" />
                              <div>
                                <p className="text-sm text-[#666666]">Best P&L</p>
                                <p className="text-xl font-bold text-green-400">+$2,340</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-[#1a1a1a] border-[#333333]">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                              <Star className="w-5 h-5 text-[#FFCE4F]" />
                              <div>
                                <p className="text-sm text-[#666666]">Streak</p>
                                <p className="text-xl font-bold text-[#EAE8E1]">5 days</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="tasks" className="space-y-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-[#EAE8E1] flex items-center gap-2">
                          <Target className="w-5 h-5 text-[#FFCE4F]" />
                          Daily Tasks & Challenges
                        </h3>
                        <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                          {tasksCompleted}/{totalTasks} Completed
                        </Badge>
                      </div>

                      {/* Progress Overview */}
                      <Card className="bg-[#1a1a1a] border-[#333333]">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-[#666666]">Overall Progress</span>
                            <span className="text-sm text-[#FFCE4F]">
                              {Math.round((tasksCompleted / totalTasks) * 100)}%
                            </span>
                          </div>
                          <Progress value={(tasksCompleted / totalTasks) * 100} className="h-2 bg-[#333333]" />
                        </CardContent>
                      </Card>

                      {/* Tasks Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tasks.map((task) => (
                          <Card
                            key={task.id}
                            className={`bg-[#1a1a1a] border transition-all duration-200 ${
                              task.completed
                                ? "border-green-500/30 bg-green-500/5"
                                : "border-[#333333] hover:border-[#FFCE4F]/50"
                            }`}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  {task.icon}
                                  <div>
                                    <h4 className="font-medium text-[#EAE8E1]">{task.title}</h4>
                                    <p className="text-xs text-[#666666] mt-1">{task.description}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-bold text-[#FFCE4F] flex items-center gap-1">
                                    +{task.reward}
                                    <BananaIcon className="text-sm" />
                                  </div>
                                </div>
                              </div>

                              {task.progress !== undefined && (
                                <div className="mb-3">
                                  <div className="flex justify-between text-xs mb-1">
                                    <span className="text-[#666666]">Progress</span>
                                    <span className="text-[#FFCE4F]">
                                      {task.progress}/{task.maxProgress}
                                    </span>
                                  </div>
                                  <Progress
                                    value={(task.progress / task.maxProgress) * 100}
                                    className="h-1 bg-[#333333]"
                                  />
                                </div>
                              )}

                              <Button
                                size="sm"
                                className={`w-full ${
                                  task.completed
                                    ? "bg-green-500 hover:bg-green-600 text-white"
                                    : "bg-[#FFCE4F] hover:bg-[#FFCE4F]/90 text-black"
                                }`}
                                disabled={task.completed}
                                onClick={() => !task.completed && handleTaskClaim(task.id, task.reward)}
                              >
                                {task.completed ? "Completed ✓" : "Claim Reward"}
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-80 space-y-6">
              {/* User Profile with Level */}
              <Card className="bg-gradient-to-r from-[#FFCE4F]/10 to-transparent border-[#FFCE4F]/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFCE4F] to-[#FFA500] flex items-center justify-center">
                      <span className="text-xl">🐵</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#EAE8E1]">MONKEY</h2>
                      <div className="flex items-center gap-2">
                        <Dialog open={showLevelDialog} onOpenChange={setShowLevelDialog}>
                          <DialogTrigger asChild>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge
                                  variant="outline"
                                  className="bg-[#FFCE4F]/20 text-[#FFCE4F] border-[#FFCE4F]/30 cursor-pointer hover:bg-[#FFCE4F]/30 transition-colors duration-200"
                                >
                                  Level {userLevel}/{maxLevel}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Click to see level benefits</p>
                              </TooltipContent>
                            </Tooltip>
                          </DialogTrigger>
                          <DialogContent className="bg-[#1a1a1a] border-[#333333] text-[#EAE8E1] max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="text-[#FFCE4F] text-xl flex items-center gap-2">
                                <Star className="w-5 h-5" />
                                Level System & Benefits
                              </DialogTitle>
                              <DialogDescription className="text-[#EAE8E1]/80">
                                <div className="space-y-6 mt-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[1, 2, 3, 4].map((level) => (
                                      <Card
                                        key={level}
                                        className={`p-4 transition-all duration-200 ${
                                          level === userLevel
                                            ? "bg-[#FFCE4F]/10 border-[#FFCE4F]/50"
                                            : level < userLevel
                                              ? "bg-green-500/10 border-green-500/30"
                                              : "bg-[#333333]/20 border-[#333333]"
                                        }`}
                                      >
                                        <div className="space-y-3">
                                          <div className="flex items-center justify-between">
                                            <h4 className="font-semibold text-[#EAE8E1] flex items-center gap-2">
                                              Level {level}
                                              {level === userLevel && (
                                                <Badge className="bg-[#FFCE4F] text-black text-xs">Current</Badge>
                                              )}
                                              {level < userLevel && (
                                                <Badge className="bg-green-500 text-white text-xs">Completed</Badge>
                                              )}
                                            </h4>
                                            <div className="text-lg font-bold text-[#FFCE4F]">{15 + level * 5}%</div>
                                          </div>

                                          <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2">
                                              <TrendingUp className="w-4 h-4 text-[#FFCE4F]" />
                                              <span>Referral Rate: {15 + level * 5}%</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <Users className="w-4 h-4 text-blue-400" />
                                              <span>Min Referrals: {level * 5}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                              <SolanaIcon className="w-4 h-4 text-[#FFCE4F]" />
                                              <span>Min Volume: {level * 10} SOL</span>
                                            </div>
                                            {level > 1 && (
                                              <div className="flex items-center gap-2">
                                                <Gift className="w-4 h-4 text-purple-400" />
                                                <span>Bonus: {level * 100} $BANANA</span>
                                              </div>
                                            )}
                                          </div>

                                          {level === userLevel + 1 && (
                                            <div className="mt-3 p-2 bg-[#FFCE4F]/10 rounded text-xs">
                                              <div className="font-medium text-[#FFCE4F] mb-1">
                                                Next Level Requirements:
                                              </div>
                                              <div className="text-[#EAE8E1]/80">
                                                • {peopleNeededForNextLevel} more active referrals •{" "}
                                                {((userLevel + 1) * 10 - 13.1).toFixed(1)} more SOL volume
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      </Card>
                                    ))}
                                  </div>

                                  <div className="bg-[#0a0a0a] p-4 rounded border border-[#333333]">
                                    <h4 className="font-semibold text-[#EAE8E1] mb-2 flex items-center gap-2">
                                      <Trophy className="w-4 h-4 text-[#FFCE4F]" />
                                      Level Up Rewards
                                    </h4>
                                    <div className="space-y-2 text-sm text-[#EAE8E1]/80">
                                      <div>
                                        • <span className="text-[#FFCE4F]">Higher referral rates</span> - earn more from
                                        each referral
                                      </div>
                                      <div>
                                        • <span className="text-green-400">Exclusive bonuses</span> - special $BANANA
                                        rewards
                                      </div>
                                      <div>
                                        • <span className="text-blue-400">Priority support</span> - faster response
                                        times
                                      </div>
                                      <div>
                                        • <span className="text-purple-400">Early access</span> - new features and tools
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                        <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                          {referralPercentage}% Rate
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-[#EAE8E1]">
                      INVITE <span className="text-[#FFCE4F]">{peopleNeededForNextLevel}</span> MORE PEOPLE, LEVEL UP
                      AND GET SOME SOLANA
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#666666]">Next Level: {nextLevelPercentage}% Rate</span>
                        <span className="text-[#FFCE4F]">{progressToNextLevel}%</span>
                      </div>
                      <Progress value={progressToNextLevel} className="h-2 bg-[#333333]" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-[#666666] mb-1">TOTAL USERS / TOTAL VOLUME</div>
                  <div className="font-mono text-[#EAE8E1]">
                    <span className="text-[#FFCE4F]">7</span> / <span className="text-[#FFCE4F]">1.31</span>
                    <SolanaIcon className="w-4 h-4 inline ml-1 text-[#FFCE4F]" />
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#666666] mb-1">TOTAL EARNED</div>
                  <div className="font-mono text-[#EAE8E1]">
                    <span className="text-[#FFCE4F]">0.53</span>
                    <SolanaIcon className="w-4 h-4 inline mx-1 text-[#FFCE4F]" />/{" "}
                    <span className="text-[#666666]">$34.50</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#666666] mb-1">CLAIMED REFERRALS</div>
                  <div className="font-mono text-[#EAE8E1]">
                    <span className="text-[#FFCE4F]">0.25</span>
                    <SolanaIcon className="w-4 h-4 inline mx-1 text-[#FFCE4F]" />/{" "}
                    <span className="text-[#666666]">$16.25</span>
                  </div>
                </div>
              </div>

              {/* Unclaimed Section */}
              <div className="border border-[#FFCE4F] rounded-lg p-4 space-y-3 bg-[#FFCE4F]/5">
                <div className="text-center">
                  <div className="text-xs text-[#666666] mb-1">UNCLAIMED</div>
                  <div className="text-2xl font-bold text-[#FFCE4F] flex items-center justify-center gap-2">
                    {claimableAmount}
                    <SolanaIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Claim Section */}
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-[#666666] mb-1">CLAIM WALLET</div>
                  <Select value={selectedWallet} onValueChange={setSelectedWallet}>
                    <SelectTrigger className="bg-[#1a1a1a] border-[#333333] text-[#EAE8E1] font-mono text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#333333]">
                      <SelectItem value="9dsu8ZzMXGHqNS9JDQN..." className="text-[#EAE8E1] font-mono">
                        9dsu8ZzMXGHqNS9JDQN...
                      </SelectItem>
                      <SelectItem value="7Kx2mNvQpR8sT3uV..." className="text-[#EAE8E1] font-mono">
                        7Kx2mNvQpR8sT3uV...
                      </SelectItem>
                      <SelectItem value="4Hy9pLmK6nR2sW8..." className="text-[#EAE8E1] font-mono">
                        4Hy9pLmK6nR2sW8...
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleClaim}
                      className="w-full bg-[#FFCE4F] hover:bg-[#FFCE4F]/90 text-black font-medium py-3 rounded-md transition-all duration-200"
                      disabled={claimableAmount === 0}
                    >
                      <Wallet className="w-4 h-4 mr-2" />
                      CLAIM
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{claimableAmount > 0 ? `Claim ${claimableAmount} SOL` : "No rewards to claim yet"}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
