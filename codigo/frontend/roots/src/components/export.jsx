import * as XLSX from 'xlsx';
import {nodeNames} from './graphs'; // Importa dados do gráfico

// Cria um novo workbook
const workbook = XLSX.utils.book_new();

// Cria um novo worksheet
const headers = ['Node', 'Age']; // Inicializa com um cabeçalho padrão
const sheetData = [
  ['Alice', 30],
  ['Bob', 25],
  ['Charlie', 35]
];

// Acrescenta os nomes dos nós (nodeNames) aos cabeçalhos, se estiverem disponíveis
if (nodeNames && Array.isArray(nodeNames)) {
  headers.unshift(...nodeNames); // Adiciona os nomes dos nós no início dos cabeçalhos
}

const worksheetData = [headers, ...sheetData]; // Combina cabeçalhos e dados da planilha
const worksheet = XLSX.utils.aoa_to_sheet(worksheetData); // Converte a matriz para uma planilha

// Adiciona a planilha ao workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Escreve o workbook em um arquivo
XLSX.writeFile(workbook, 'example.xlsx');

console.log("Excel sheet created successfully!");
