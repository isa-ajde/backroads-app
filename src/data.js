import React from 'react'

import Tour1 from './images/tour-1.jpeg'
import Tour2 from './images/tour-2.jpeg'
import Tour3 from './images/tour-3.jpeg'
import Tour4 from './images/tour-4.jpeg'

export const PageLink = [
  { id: 1, href: '#home', text: 'Home' },
  { id: 2, href: '#about', text: 'About' },
  { id: 3, href: '#services', text: 'Services' },
  { id: 4, href: '#tours', text: 'Tours' },
]

export const PageIcon = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'nav-icon',
    ıconClas: 'fab fa-facebook',
  },
  {
    id: 1,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'nav-icon',
    ıconClas: 'fab fa-twitter',
  },
  {
    id: 1,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'nav-icon',
    ıconClas: 'fab fa-squarespace',
  },
]

export const Data = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  )
}

export const ServivesArt = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,       officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,       officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,       officia.',
  },
]

export const ToursArt = [
  {
    id: 1,
    href: Tour1,
    dateTitle: '26th, 2020',
    title: 'Tibet Adventure',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    date: '6 Days',
    price: '#2100',
    country: 'china',
  },
  {
    id: 2,
    href: Tour2,
    dateTitle: 'october 1th, 2020',
    title: 'best of java',
    subtitle:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    date: '11 Days',
    price: '#1400',
    country: 'indonesia',
  },
  {
    id: 3,
    href: Tour3,
    dateTitle: 'september 15th, 2020',
    title: 'explore hong kong',
    subtitle:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    date: '8 Days',
    price: '#5000',
    country: 'hong kong',
  },
  {
    id: 4,
    href: Tour4,
    dateTitle: 'december 5th, 2019',
    title: 'kenya highlights',
    subtitle:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque   vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    date: '2 days',
    price: '#3300',
    country: 'kenya',
  },
]

export const PageFoot = [
  { id: 1, href: '#home', className: 'footer-link', text: 'home' },
  { id: 2, href: '#about', className: 'footer-link', text: 'about' },
  { id: 3, href: '#services', className: 'footer-link', text: 'services' },
  { id: 4, href: '#featured', className: 'footer-link', text: 'featured' },
]

export const PageFootIcon = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'footer-icon',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'footer-icon',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    target: '_blank',
    className: 'footer-icon',
    icon: 'fab fa-squarespace',
  },
]
