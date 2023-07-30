import { api } from 'modules/disk/api/metods'

export const useUpload = () => {
  const upload = async (file: File) => {
    const linkData = await api.getUploadLink(file.name)
    if (linkData.href) {
      await api.uploadFile(linkData.href, file)
    } else {
      throw new Error()
    }
  }

  return { upload }
}
