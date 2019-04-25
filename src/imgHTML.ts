import {
  FastImageImageBestProps,
  FastImageVideoBestProps,
} from 'react-fast-image'

export default (
  props: FastImageImageBestProps | FastImageVideoBestProps,
): string => {
  let out = ''
  out += '<img'
  for (let key in props) {
    if (props.hasOwnProperty(key)) {
      const keyString = key.toLowerCase()
      if( keyString === 'imgsrc' || keyString === 'imgsrcset') {
        out += ` ${keyString.replace('img','')}="${(props as any)[key]}"`
      }
    }
  }
  out += '/>'
  return out
}
