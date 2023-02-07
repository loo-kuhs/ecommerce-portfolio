import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <Image src='' alt='' width={100} height={48} />
      <nav>
        <ul>
          <li>
            <Link href='#'>About us</Link>
          </li>
          <li>
            <Link href='#'>Woman</Link>
          </li>
          <li>
            <Link href='#'>Men</Link>
          </li>
          <li>
            <Link href='#'>Beauty</Link>
          </li>
          <li>
            <Link href='#'>Accessories</Link>
          </li>
          <li>
            <Link href='#'>Blog</Link>
          </li>
          <li>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='commerce-menu'>
        <ul>
          <li>
            <Link href='#'>
              <Image src='/' alt='' width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image src='/' alt='' width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image src='/' alt='' width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image src='/' alt='' width={24} height={24} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
