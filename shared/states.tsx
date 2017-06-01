import { rsCities } from "./cities/rs"
import { scCities } from "./cities/sc"

export const states: any = [
    // Estados
    { name: "Acre", uf: "AC", code: 1, children: [] },
    { name: "Alagoas", uf: "AL", code: 2, children: [] },
    { name: "Amapá", uf: "AP", code: 3, children: [] },
    { name: "Amazonas", uf: "AM", code: 4, children: [] },
    { name: "Bahia", uf: "BA", code: 5, children: [] },
    { name: "Ceará", uf: "CE", code: 6, children: [] },
    { name: "Distrito Federal", uf: "DF", code: 7, children: [] },
    { name: "Espírito Santo", uf: "ES", code: 8, children: [] },
    { name: "Goiás", uf: "GO", code: 9, children: [] },
    { name: "Maranhão", uf: "MA", code: 10, children: [] },
    { name: "Mato Grosso", uf: "MT", code: 11, children: [] },
    { name: "Mato Grossodo Sul", uf: "MS", code: 12, children: [] },
    { name: "Minas Gerais", uf: "MG", code: 13, children: [] },
    { name: "Pará", uf: "PA", code: 14, children: [] },
    { name: "Paraíba", uf: "PB", code: 15, children: [] },
    { name: "Paraná", uf: "PR", code: 16, children: [] },
    { name: "Pernambuco", uf: "PE", code: 17, children: [] },
    { name: "Piauí", uf: "PI", code: 18, children: [] },
    { name: "Rio de Janeiro", uf: "RJ", code: 19, children: [] },
    { name: "Rio Grande do Norte", uf: "RN", code: 20, children: [] },
    { name: "Rio Grande  do Sul", uf: "RS", code: 21, children: rsCities },
    { name: "Rondônia", uf: "RO", code: 22, children: [] },
    { name: "Roraima", uf: "RR", code: 23, children: [] },
    { name: "Santa Catarina", uf: "SC", code: 24, children: scCities },
    { name: "São Paulo", uf: "SP", code: 25, children: [] },
    { name: "Sergipe", uf: "SE", code: 26, children: [] },
    { name: "Tocantins", uf: "TO", code: 27, children: [] },
    // Região
    { name: "Região Sul", uf: "S", code: 28, region: true },
    { name: "Região Sudoeste", uf: "SO", code: 29, region: true },
    { name: "Região Centro Oeste", uf: "CO", code: 30, region: true },
    { name: "Nordeste", uf: "NE", code: 31, region: true },
    { name: "Região Norte", uf: "N", code: 32, region: true }
]
