import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ProbabilityBar from './../ProbabilityBar';

function MarketCard({
    title,
    imageUrl,
    probability,
    volume,
    href,
    onYes,
    onNo,
}) {
    return (
        <Card>
            <div style={{
                display: 'flex',       // alinha a imagem e o título na mesma linha
                alignItems: 'center',  // centraliza verticalmente
                gap: '10px',           // espaço entre a imagem e o texto
                padding: '8px',        // espaço interno nas bordas do container
                border: '1px solid #ccc', // apenas para visualizar o contorno
                borderRadius: '8px'       // cantos arredondados
            }}>
                <img 
                    src="https://img.lightshot.app/1h7H_HvmQdKbfyZ5kEuLLw.png" 
                    style={{ 
                        width: '40px', 
                        height: '40px', 
                        objectFit: 'cover', 
                    }} 
                    alt="Imagem cortada" 
                />
                <h4 style={{ margin: 0 }}>{title}</h4>
                <ProbabilityBar value={20} />
            </div>

    </Card>
    );
}

export default MarketCard;
