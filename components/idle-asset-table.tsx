'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronDown, ChevronUp } from "lucide-react"

type Asset = {
  id: string
  '資產類型': string
  '管理機關': string
  '行政區': string
  '地段': string
  '地址': string
  '標的名稱': string
  '建立時間': string
}

type SortConfig = {
  key: keyof Asset | null
  direction: 'asc' | 'desc'
}

interface IdleAssetTableProps {
  assets: Asset[]
  sortConfig: SortConfig
  onSort: (key: keyof Asset) => void
}

const SortIcon = ({ columnKey, sortConfig }: { columnKey: keyof Asset, sortConfig: SortConfig }) => {
  if (sortConfig.key !== columnKey) {
    return (
      <ChevronUp className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
    )
  }
  return sortConfig.direction === 'asc' ? (
    <ChevronUp className="w-4 h-4" />
  ) : (
    <ChevronDown className="w-4 h-4" />
  )
}

export function IdleAssetTable({ assets, sortConfig, onSort }: IdleAssetTableProps) {
  return (
    <div className="relative rounded-md border mt-2">
      <div className="overflow-y-scroll max-h-[70vh]">
        <Table>
          <TableHeader className="sticky top-0 bg-gray-200 z-10">
            <TableRow>
              {[
                ['資產類型', '資產類型'],
                ['管理機關', '管理機關'],
                ['行政區', '行政區'],
                ['地段', '地段'],
                ['地址', '地址'],
                ['標的名稱', '標的名稱'],
                ['建立時間', '建立時間']
              ].map(([label, key]) => (
                <TableHead 
                  key={key}
                  className="group cursor-pointer hover:bg-gray-200"
                  onClick={() => onSort(key as keyof Asset)}
                >
                  <div className="flex items-center gap-1">
                    {label}
                    <SortIcon columnKey={key as keyof Asset} sortConfig={sortConfig} />
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell>{asset['資產類型']}</TableCell>
                <TableCell>{asset['管理機關']}</TableCell>
                <TableCell>{asset['行政區']}</TableCell>
                <TableCell>{asset['地段']}</TableCell>
                <TableCell>{asset['地址']}</TableCell>
                <TableCell>{asset['標的名稱']}</TableCell>
                <TableCell>
                  {asset['建立時間'].split('T')[0]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 