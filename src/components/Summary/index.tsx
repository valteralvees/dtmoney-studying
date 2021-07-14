import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saida.svg"
import totalImg from "../../assets/total.svg"

import { Container } from "./styles";

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
          <strong>R$1000</strong>
        </header>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas" />
          <strong>-R$500</strong>
        </header>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
          <strong>R$500</strong>
        </header>
      </div>
    </Container>
  )
}