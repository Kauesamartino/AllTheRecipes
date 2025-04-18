export default function Hero(){
    return(
        <div 
            style={{
                backgroundImage: `url('/hero.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '40px',
                fontWeight: 'bold'
            }}
        >
            Descubra novas receitas todos os dias.
        </div>
    )
}