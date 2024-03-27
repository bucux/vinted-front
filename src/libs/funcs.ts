

export const mmm = console.log // version courte de console.log, qui permet de ne pas polluer le code, et se nettoyer facilement par un search 'mm'

export const clone = <T>(obj: T): T => { return JSON.parse(JSON.stringify(obj))} // cloner un objet ou un tableau