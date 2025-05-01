
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
        // Add class to body for mobile-specific styling without blur
        document.body.classList.add('mobile-view')
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType('tablet')
        document.body.classList.remove('mobile-view')
      } else {
        setDeviceType('desktop')
        document.body.classList.remove('mobile-view')
      }
    }

    // Set initial value
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.classList.remove('mobile-view')
    }
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
