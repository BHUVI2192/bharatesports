
import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

export type DeviceType = 'mobile' | 'tablet' | 'desktop'

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  React.useEffect(() => {
    const checkMobile = () => {
      const mobileDevice = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobileDevice)
      
      // Force remove ALL blur styles when on mobile
      if (mobileDevice) {
        document.documentElement.classList.add('mobile-device');
        
        // Force solid backgrounds and remove all blurs
        document.documentElement.style.setProperty('--background-opacity', '1');
        document.documentElement.style.setProperty('--blur-amount', '0');
        
        // Apply inline styles to force solid backgrounds for specific elements
        const elementsWithBlur = document.querySelectorAll('[class*="backdrop-blur"], [class*="bg-opacity"]');
        elementsWithBlur.forEach((el: Element) => {
          (el as HTMLElement).style.backdropFilter = 'none';
          // Fix the TypeScript error by using the correct property name
          (el as HTMLElement).style.backdropFilter = 'none';
          (el as HTMLElement).style.backgroundColor = '#0f172a';
        });
      } else {
        document.documentElement.classList.remove('mobile-device');
        document.documentElement.style.removeProperty('--background-opacity');
        document.documentElement.style.removeProperty('--blur-amount');
      }
    }
    
    // Set initial value
    checkMobile()
    
    // Add event listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = React.useState<DeviceType>(
    typeof window !== 'undefined' 
      ? window.innerWidth < MOBILE_BREAKPOINT 
        ? 'mobile' 
        : window.innerWidth < TABLET_BREAKPOINT 
          ? 'tablet' 
          : 'desktop'
      : 'desktop'
  )

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType('mobile')
        document.documentElement.classList.add('mobile-device');
        
        // Force solid backgrounds with no transparency
        document.body.classList.add('mobile-solid-bg');
        
        // Apply direct styles to elements with blur
        const elementsWithBlur = document.querySelectorAll('[class*="backdrop-blur"], [class*="bg-opacity"], [class*="bg-gradient"], .bg-navy-950, .bg-navy-900, .bg-navy-800');
        elementsWithBlur.forEach((el: Element) => {
          (el as HTMLElement).style.backdropFilter = 'none';
          // Fix the TypeScript error by using the correct property name
          (el as HTMLElement).style.backdropFilter = 'none';
          (el as HTMLElement).style.backgroundImage = 'none';
        });
        
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType('tablet')
        document.documentElement.classList.remove('mobile-device');
        document.body.classList.remove('mobile-solid-bg');
      } else {
        setDeviceType('desktop')
        document.documentElement.classList.remove('mobile-device');
        document.body.classList.remove('mobile-solid-bg');
      }
    }

    // Set initial value
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return deviceType
}

export function useIsTablet() {
  const deviceType = useDeviceType()
  return deviceType === 'tablet'
}

export function useIsDesktop() {
  const deviceType = useDeviceType()
  return deviceType === 'desktop'
}
