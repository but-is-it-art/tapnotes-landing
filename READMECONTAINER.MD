OUR BOOTSTRAP: https://tailwindcss.com/docs
OUR "HTML ENVIRONMENT" NEXTJS ( works for understanding how to build components ): https://nextjs.org/docs/basic-features/static-file-serving
OUR HTML : REACT COMPONENTS
OUR STYLING THINGY: styled-components

TOTUL E O COMPONENTA:

<h1>TITLU </h1> - > se face:
function Title() {
  return (
    <> <- RADACINA!
    <h1>TITLU </h1>
    </>
  )
}


export default Title <- NUMAI DACA ESTE SINGUR IN FISIER CA ASTA VA FI LUAT IN SERIOS 

style={ {maxWidth:'70%',height:'auto'} }

2 reguli -> totu e o componenta
se fac in 2-3 moduri
Radacina trebuie sa fie UN SINGUR NOD
cel unde scrie export e cel vizibil pe pagina
atributele HTML au camelcase naming fara spatii NU EXISTA <div  atribute-name -> <div atributeName
<Menu2> </Menu2>

styling: global stuff -> style.css in styling -> global
		 local stuff 

{children} -> WHERE DO YOU WANT THEM

COmponentele:
- declarate in pagina
- declarate in afara -> declari in afara trebuie declarate ca functie 


---

To access your web application over HTTP or HTTPS protocol, make sure your application is running on port 3000 and use the following link:

http(s)://NovaLanding-klauss194457135.codeanyapp.com

If the port is blocked by your firewall you can connect through the standard HTTP port: (replace XX with port you have specified in your app)

http://port-XX.NovaLanding-klauss194457135.codeanyapp.com