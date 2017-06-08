import { rjCities } from "./cities/rj"
import { spCities } from "./cities/sp"
import { rsCities } from "./cities/rs"
import { prCities } from "./cities/pr"
import { scCities } from "./cities/sc"

export const states: any = [
    // Estados
    // NORTE
    { name: "Acre", uf: "AC", code: 1, children: [{ name: "randomc", code: 1 }] },
    { name: "Amapá", uf: "AP", code: 3, children: [{ name: "randomc", code: 1 }] },
    { name: "Roraima", uf: "RR", code: 23, children: [{ name: "randomc", code: 1 }] },
    { name: "Pará", uf: "PA", code: 14, children: [{ name: "randomc", code: 1 }] },
    { name: "Maranhão", uf: "MA", code: 10, children: [{ name: "randomc", code: 1 }] },
    { name: "Rondônia", uf: "RO", code: 22, children: [{ name: "randomc", code: 1 }] },
    { name: "Amazonas", uf: "AM", code: 4, children: [{ name: "randomc", code: 1 }] },
    // NORDESTE
    { name: "Bahia", uf: "BA", code: 5, children: [{ name: "randomc", code: 1 }] },
    { name: "Paraíba", uf: "PB", code: 15, children: [{ name: "randomc", code: 1 }] },
    { name: "Ceará", uf: "CE", code: 6, children: [{ name: "randomc", code: 1 }] },
    { name: "Pernambuco", uf: "PE", code: 17, children: [{ name: "randomc", code: 1 }] },
    { name: "Rio Grande do Norte", uf: "RN", code: 20, children: [{ name: "randomc", code: 1 }] },
    { name: "Piauí", uf: "PI", code: 18, children: [{ name: "randomc", code: 1 }] },
    { name: "Sergipe", uf: "SE", code: 26, children: [{ name: "randomc", code: 1 }] },
    { name: "Alagoas", uf: "AL", code: 2, children: [{ name: "randomc", code: 1 }] },
    { name: "Tocantins", uf: "TO", code: 27, children: [{ name: "randomc", code: 1 }] },
    // CENTRO-OESTE
    { name: "Distrito Federal", uf: "DF", code: 7, children: [{ name: "randomc", code: 1 }] },
    { name: "Goiás", uf: "GO", code: 9, children: [{ name: "randomc", code: 1 }] },
    { name: "Mato Grosso", uf: "MT", code: 11, children: [{ name: "randomc", code: 1 }] },
    { name: "Mato Grossodo Sul", uf: "MS", code: 12, children: [{ name: "randomc", code: 1 }] },
    // SUDOESTE
    { name: "Espírito Santo", uf: "ES", code: 8, children: [{ name: "randomc", code: 1 }] },
    { name: "Minas Gerais", uf: "MG", code: 13, children: [{ name: "randomc", code: 1 }] },
    { name: "Rio de Janeiro", uf: "RJ", code: 19, children: rjCities },
    { name: "São Paulo", uf: "SP", code: 25, children: spCities },
    // SUL
    { name: "Rio Grande  do Sul", uf: "RS", code: 21, children: rsCities },
    { name: "Paraná", uf: "PR", code: 16, children: prCities },
    { name: "Santa Catarina", uf: "SC", code: 24, children: scCities },
    /////////
    // Região
    { name: "Região Sul", uf: "S", code: 28, region: true, children: [{ name: "randomc", code: 1 }] },
    { name: "Região Sudoeste", uf: "SO", code: 29, region: true, children: [{ name: "randomc", code: 1 }] },
    { name: "Região Centro Oeste", uf: "CO", code: 30, region: true, children: [{ name: "randomc", code: 1 }] },
    { name: "Nordeste", uf: "NE", code: 31, region: true, children: [{ name: "randomc", code: 1 }] },
    { name: "Região Norte", uf: "N", code: 32, region: true, children: [{ name: "randomc", code: 1 }] }
]
