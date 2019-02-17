import messages from './translateword'
import * as _ from 'lodash';


function getLocText(rawText) {
    
    let m;
    // 处理如 "Lith A1" / "Lith A1 Relic" => "古纪 A1 遗物"
    if (m = rawText.match(/^(Lith|Axi|Meso|Neo) (\w+?\d+)(?: (\S+?)(?: \(\S+\))?)?$/i))
      return `${getLocText(m[1])} ${m[2]} ${getLocText(m[3] || "relic")}`;
    // 处理如 "100 Endo" => "100 内融核心"
    if (m = rawText.match(/^(\d+)s? (.+)/i))
      return `${m[1]} ${getLocText(m[2])}`;
    //处理如 "10000cr" => "10000星币"
    if(m=rawText.match(/^(\d+)(cr)/i))
        return `${m[1]} ${getLocText(m[2])}`
    //处理如 "Equinox Clisthert Helmet + 14300cr" => "EQUINOX 晨昏恶魔头盔+14300星币"
    if(m=rawText.match(/^(.+) \+ (\d+)(cr)/))
        return `${getLocText(m[1])}+${m[2]}${getLocText(m[3])}`


    //这儿返回词库中存在的翻译,性能足够情况下暂时不做优化
    if(messages[rawText]){
      return messages[rawText]
    }else{
      return rawText
    }
    
  }
  
  
  
  function deepTranslate(obj) {
    if (_.isArray(obj))
      return _.map(obj, v =>
        typeof v === "string" ? getLocText(v) :
          typeof v === "object" ? deepTranslate(v) : v);
    else
      return _.mapValues(obj, (v, i) =>
        typeof v === "string" ?
          i === "node" || i === "location" ? nodeTranslate(v) : getLocText(v) :
          typeof v === "object" ? deepTranslate(v) : v);
  }
  function nodeTranslate(node) {
    return node.replace(/(.+) \((.+)\)/, (_, a, b) => `${a} | ${getLocText(b)}`);
  }
  
  function nodeNameTranslate(node) {
    node = node.replace(/Relay$/, getLocText("Relay"));
    const tranlate = getLocText(node);
    return tranlate;
  }



  export default deepTranslate;