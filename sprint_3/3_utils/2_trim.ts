function trim(string: string, chars?: string): string {

    if(chars === undefined){
        chars = ''
    }

    const RIGHT_SPACE_REGEXP = new RegExp(`[^\\xA0 ${chars}]+.*`)
    const LEFT_SPACE_REGEXP = new RegExp(`.*[^\\xA0 ${chars}]+`)

    const resultR = RIGHT_SPACE_REGEXP.exec(string)
    if(!resultR){
        return ''
    }
    const resultL = LEFT_SPACE_REGEXP.exec(resultR[0])
    if(!resultL){
        return ''
    }
    console.log(resultL[0])
    return resultL[0]
}

export default trim

trim('0', '0')
trim('  abc  '); // => 'abc'
trim('-_-abc-_-', '_-'); // => 'abc'
trim('\xA0foo'); // "foo"
trim('\xA0foo', ' '); // " foo"
trim('-_-ab c ghhg hg -_-', '_-'); // ab c

['  foo  ', '  bar  '].map(value => trim(value)); // => ['foo', 'bar']
