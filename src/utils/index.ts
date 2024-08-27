// 请求地址
export const BASE_URl = import.meta.env.VITE_APP_BASEURL

// oss地址
export const OSS_BASEURl = import.meta.env.VITE_APP_IMAGE_PATHURL

// 文件/图片
export const IMAGE_BASEURl = OSS_BASEURl + import.meta.env.VITE_APP_STATIC_PATH

/** 区分开发还是生产 */
export const IS_DEV = import.meta.env.MODE === 'development'

export const config = {
  api: IS_DEV ? 'api/' : 'api/',
  dataCenterService: 'data-center-service'
}

/** 刷新oss图片 */
export const REFRESH_OSS = `?t=${new Date().getTime() / 600000}`
