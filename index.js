fetch('http://localhost:3000/livros')
    .then(resposta => resposta.json())
    .then(resposta =>{
        const lista = document.querySelector('#list');
        console.log(lista);
        
        
        
        let result = '';
        resposta.forEach(el =>{
            result += `
         <li class="flex justify-between gap-x-6 py-5">
              <div class="flex min-w-0 gap-x-4">
                <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-gray-900">${el.titulo}</p>
                  <p class="mt-1 truncate text-xs leading-5 text-green-500">${el.status}</p>
                </div>
              </div>
              <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p class="text-sm leading-6 text-gray-900">${el.preco}</p>
                
              </div>
            </li>
        
        `
        })
        
        lista.innerHTML = result;
    })

