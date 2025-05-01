
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
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      
      // Force remove any blur styles when on mobile
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        document.documentElement.classList.add('mobile-device');
      } else {
        document.documentElement.classList.remove('mobile-device');
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
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType('tablet')
        document.documentElement.classList.remove('mobile-device');
      } else {
        setDeviceType('desktop')
        document.documentElement.classList.remove('mobile-device');
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
