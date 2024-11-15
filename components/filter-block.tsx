'use client'

import * as React from 'react'
import { ChevronDown, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export function FilterBlock() {
  const [searchText, setSearchText] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="border rounded-lg py-2 px-4 bg-white">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center gap-2">
          <ChevronDown className={`h-4 w-4 transform ${isOpen ? 'rotate-0' : '-rotate-90'} transition-transform`} />
          <span className="font-medium">條件篩選</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="space-y-6">
            {/* Search Input */}
            <div className="flex gap-2">
              <Input
                placeholder="輸入要過濾的文字"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="flex-1"
              />
              <Button
                variant="outline"
                onClick={() => setSearchText('')}
                className="shrink-0"
              >
                清除
              </Button>
            </div>

            {/* Asset Type Section */}
            <div className="space-y-2">
              <h3 className="font-medium">資產種類</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Switch id="asset-toggle" />
                  <Label htmlFor="asset-toggle">包含/不包含</Label>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="h-8">建物</Button>
                  <Button variant="outline" className="h-8">土地</Button>
                </div>
              </div>
            </div>

            {/* Management Agency Section */}
            <div className="space-y-2">
              <h3 className="font-medium">管理機關</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Switch id="agency-toggle" />
                  <Label htmlFor="agency-toggle">包含/不包含</Label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Array(6).fill(null).map((_, i) => (
                    <Button key={`agency-${i}`} variant="outline" className="h-8">
                      {i % 2 === 0 ? '建物' : '土地'}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Administrative District Section */}
            <div className="space-y-2">
              <h3 className="font-medium">行政區</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Switch id="district-toggle" />
                  <Label htmlFor="district-toggle">包含/不包含</Label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Array(18).fill(null).map((_, i) => (
                    <Button key={`district-${i}`} variant="outline" className="h-8">
                      {i % 2 === 0 ? '建物' : '土地'}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}