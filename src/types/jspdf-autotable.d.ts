declare module 'jspdf-autotable' {
  import { jsPDF } from 'jspdf'

  export interface UserOptions {
    head?: any[][]
    body?: any[][]
    foot?: any[][]
    startY?: number
    margin?: number | { top?: number; right?: number; bottom?: number; left?: number }
    pageBreak?: 'auto' | 'avoid' | 'always'
    theme?: 'striped' | 'grid' | 'plain'
    styles?: any
    headStyles?: any
    bodyStyles?: any
    footStyles?: any
    columnStyles?: { [key: number]: any }
    didDrawPage?: (data: any) => void
    didDrawCell?: (data: any) => void
    willDrawCell?: (data: any) => void
    didParseCell?: (data: any) => void
    [key: string]: any
  }

  export default function autoTable(doc: jsPDF, options: UserOptions): void
}
