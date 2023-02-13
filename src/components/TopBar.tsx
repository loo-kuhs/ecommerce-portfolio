import Image from 'next/image'
import Link from 'next/link'

export const TopBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='#'>+38 (050) 12 34 567</Link>
        </li>
        <li>
          <Link href='#'>Ukraine, Kyiv, Khreshchatyk</Link>
        </li>
        <li>
          <Link href='#'>All week 24/7</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href='#'>
            <Image src='/icon/ico-small-fb.svg' alt='' width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <Image src='/icon/ico-small-tw.svg' alt='' width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <Image src='/icon/ico-small-ig.svg' alt='' width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <Image src='/icon/ico-small-pin.svg' alt='' width={24} height={24} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
