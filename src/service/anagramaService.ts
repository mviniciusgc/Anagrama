import { Request, Response } from 'express';

interface textoRecebido {
    text: string;
}

class index {


    public async execute(request: Request, response: Response): Promise<Response> {
        let { text }: textoRecebido = request.body;
        let arrayRecebido = text.split(" ");
        // colocando todos os textos em minusculo
        arrayRecebido = arrayRecebido.map(elemento => elemento.toLocaleLowerCase());
        let arrayNovo: Array<string> = [];

        //retirando elementos iguais
        var arraySemRepeticao = arrayRecebido.filter((element, i) => arrayRecebido.indexOf(element) === i);

        // ordenando os valores
        for (var i = 0; i <= arraySemRepeticao.length; i++) {
                if(arraySemRepeticao[i]){
                    const textoAtual = Array.from(arraySemRepeticao[i]);
                    const textoOrdenado = textoAtual.sort();
                    arrayNovo.push(textoOrdenado.join(''))
                }
        }

        //contando anagramas por palavras sem considerar a matrix
        var objects:  any  = {};
        for (var a in arrayNovo) {
            objects[
                arrayNovo[a]] = objects[arrayNovo[a]
                ] != undefined ? objects[arrayNovo[a]] + 1 : 0
        };

        return response.json(objects);

    }

}

export { index }

