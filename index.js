import http from "node:http";
let produtos = [
    {id: 1,nome: "Caneca Branca",estoque: 3},{id: 2,nome: "Caneca Colorida",estoque: 7}];

function buscarProduto(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const produto = produtos.find((item)=>{
                return item.id === Number(id);
            });
            resolve(produto);
        },2000)
    })
}

const servidor = http.createServer((req,res) => {
    const caminho = req.url;
    const partes = caminho.split("/");
    const id = partes[2];
    if(req.method === "GET" && req.url === "/"){
        res.end("Servidor de estoque online");
    }else if(req.method === "GET" && req.url === "/produtos"){
        const listaProdutos = JSON.stringify(produtos);
        res.setHeader("Content-Type", "application/json");
        res.end(listaProdutos)
    }else if(req.method === "GET" && caminho.startsWith("/produtos/")){
      async function executar(){  const produto = await buscarProduto(id);
        if(produto === undefined){
            res.statusCode = 404;
            return res.end("Produto não encontrado");
        }
        const userProduct = JSON.stringify(produto);
        res.setHeader("Content-Type", "application/json");
        res.end(userProduct)
    }
        executar();
    }else {
        res.statusCode = 404;
        res.end("Pagina não encontrada");
    }
})
servidor.listen(3000, () => {
    console.log("Servidor aberto porta 3000")
})
