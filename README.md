Neste repositório estão alguns componentes reutilizáveis no desenvolvimento frontend.

Para formulários verificar:
    - react-hook-form (npm install react-hook-form) 
        não usa state para guardar validações nem precisa usar o OnChange. Muito mais simples.
        excelente para inserir erros nos campos obrigatórios 
    - zod (npm i zod)
    - @hookform/resolvers para fazer a ligação do hookform com o zod (npm install @hookform/resolvers)
    - react-query

 ## React hook form, Zod, @hookform/resolver

    Essa estrutura de formulário é mais completa, zod possui uma gama muito grande de validações e transformações de dados. Juntamente com o resolver e o TypeScript fica muito prático de utilizar.
    Foi criado um Schema que faz a "montagem" do formulário e depois inferido isso em um tipo para então repassar ao UseForm como um generic.   

    