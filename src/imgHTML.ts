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
        out += ` ${keyString.replace('img','')}="${(props as any)[key]}"`
    }
  }
  out += ' size="100vw" />'
  return out
}
