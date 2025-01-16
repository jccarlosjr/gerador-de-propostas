function formatCPF(input) {
    let cpf = input.value.replace(/\D/g, "");
    if (cpf.length > 3 && cpf.length <= 6) {
      cpf = cpf.slice(0, 3) + "." + cpf.slice(3);
    } else if (cpf.length > 6 && cpf.length <= 9) {
      cpf = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6);
    } else if (cpf.length > 9) {
      cpf =
        cpf.slice(0, 3) +
        "." +
        cpf.slice(3, 6) +
        "." +
        cpf.slice(6, 9) +
        "-" +
        cpf.slice(9, 11);
    }
    input.value = cpf;
}
  
function formatCelphone(input) {
    let cel = input.value.replace(/\D/g, "");
    if (cel.length > 2 && cel.length <= 6) {
        cel = "(" + cel.slice(0, 2) + ")" + cel.slice(2);
    } else if (cel.length > 6 && cel.length <= 10) {
        cel = "(" + cel.slice(0, 2) + ")" + cel.slice(2, 6) + "-" + cel.slice(6);
    } else if (cel.length > 10) {
        cel =
        "(" + cel.slice(0, 2) + ")" + cel.slice(2, 7) + "-" + cel.slice(7, 11);
    }
    input.value = cel;
}

function formatCEP(input) {
    let cep = input.value.replace(/\D/g, "");
    if (cep.length > 2 && cep.length <= 5) {
        cep = cep.slice(0, 2) + "." + cep.slice(2);
    } else if (cep.length > 5) {
        cep = cep.slice(0, 2) + "." + cep.slice(2, 5) + "-" + cep.slice(5, 8);
    }
    input.value = cep;
}
  
function formatDate(input) {
    input.value = input.value.replace(/\D/g, "");
    if (input.value.length >= 2) {
        input.value = input.value.slice(0, 2) + "/" + input.value.slice(2);
    }

    if (input.value.length > 5) {
        input.value = input.value.slice(0, 5) + "/" + input.value.slice(5);
    }

    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10);
    }
}

function floatFormat(input) {
    let value = input.value.replace(/\D/g, "");
    if (value.length >= 2) {
        const decimalPart = value.slice(-2);
        const integerPart = value.slice(0, -2);

        input.value = `${integerPart}.${decimalPart}`;
    } else {
        input.value = value;
    }
}
  
function formatNumbersOnly(input) {
    input.value = input.value.replace(/\D/g, "");
}
  
function formatDateToYYYYMMDD(dateString) {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(regex);
  
    if (!match) {
      console.error("Data inválida");
      return null;
    }
  
    const day = match[1];
    const month = match[2];
    const year = match[3];
  
    return `${year}-${month}-${day}`;
}
  
function cleanCPF(cpf) {
    return cpf.replace(/[.\-]/g, "");
}
  
function addSpinner() {
    const spinnerOverlay = document.getElementById('spinner-overlay');
    spinnerOverlay.classList.remove('d-none');
    spinnerOverlay.classList.add('active');
}

function removeSpinner() {
    const spinnerOverlay = document.getElementById('spinner-overlay');
    spinnerOverlay.classList.add('d-none');
    spinnerOverlay.classList.remove('active');
}
  
function formatDateISO(dataISO) {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
}
  
function addNewToast(type, msg){
    let toastDiv = document.getElementById("toast-div");
    toastDiv.innerHTML = ''
    if(type == "success"){
      toastDiv.innerHTML += `
          <div id="live-toast-success" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive"
              aria-atomic="true">
              <div class="d-flex">
                  <div class="toast-body text-center">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                      <span id="toast-text">${msg}</span>
                  </div>
              </div>
          </div>`;
      let toastSuccess = document.getElementById("live-toast-success");
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastSuccess);
      toastBootstrap.show();
    } else if (type == "danger"){
      toastDiv.innerHTML += `
          <div id="live-toast-danger" class="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive"
              aria-atomic="true">
              <div class="d-flex">
                  <div class="toast-body text-center">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                      <span id="toast-text">${msg}</span>
                  </div>
              </div>
          </div>`;
      let toastDanger = document.getElementById("live-toast-danger");
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastDanger);
      toastBootstrap.show();
    } else if (type == "warning"){
      toastDiv.innerHTML += `
      <div id="toast-div" class="toast-container position-fixed top-0 end-0 p-3">
          <div id="live-toast-warning" class="toast align-items-center text-bg-warning border-0" role="alert" aria-live="assertive"
              aria-atomic="true">
              <div class="d-flex">
                  <div class="toast-body text-center">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                      <span id="toast-text">${msg}</span>
                  </div>
              </div>
          </div>
      </div>`;
      let toastWarning = document.getElementById("live-toast-warning");
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastWarning);
      toastBootstrap.show();
    } else if (type == "primary"){
      toastDiv.innerHTML += `
      <div id="toast-div" class="toast-container position-fixed top-0 end-0 p-3">
          <div id="live-toast-primary" class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive"
              aria-atomic="true">
              <div class="d-flex">
                  <div class="toast-body text-center">
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                      <span id="toast-text">${msg}</span>
                  </div>
              </div>
          </div>
      </div>`;
      let toastPrimary = document.getElementById("live-toast-primary");
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastPrimary);
      toastBootstrap.show();
    }
}
  
function numberHandler(value) {
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
}

function representanteHandler(){
    let representante = document.getElementById("representante");
    let divRep = document.getElementById("rep-div");
    if(representante.value == "SIM"){
      divRep.style.display = 'block';
    }else{
      divRep.style.display = 'none';
    }
}

function convenioHandler(){
    let agency = document.getElementById("agency");
    let agency_code_div = document.getElementById("agency_code_div");
    let label = document.getElementById("label_agency_code");
    if(agency.value == "INSS"){
      agency_code_div.innerHTML = `
        <select required class="form-select form-select-sm" id="agency_code">
          <option selected>Selecione a Espécie</option>
          <option value="1">1 - Por morte do trabalhador rural</option>
          <option value="2">2 - Pensão por morte por acidente do trabalho do trabalhador rural</option>
          <option value="3">3 - Pensão por morte do empregador rural</option>
          <option value="4">4 - Por invalidez do trabalhador rural</option>
          <option value="5">5 - Aposentadoria por invalidez, por acidente do trabalhador rural</option>
          <option value="6">6 - Por invalidez do empregador rural</option>
          <option value="7">7 - Por idade do trabalhador rural</option>
          <option value="8">8 - Por idade do empregador rural</option>
          <option value="11">11 - Amparo previdenciário invalidez - Trab. rural</option>
          <option value="12">12 - Amparo previdenciário idade - Trab. rural</option>
          <option value="18">18 - Auxílio inclusão</option>
          <option value="19">19 - Pensão de estudante (Lei 7004/82)</option>
          <option value="20">20 - Pensão por morte de ex-diplomata</option>
          <option value="21">21 - Por morte previdenciária (LOPS)</option>
          <option value="22">22 - Por morte estatutária (EPU)</option>
          <option value="23">23 - Por morte de ex-combatente</option>
          <option value="24">24 - Pensão especial (ato institucional)</option>
          <option value="26">26 - Pensão especial (Lei 593/48) (EPU)</option>
          <option value="27">27 - Por morte do de servidor público federal com dupla aposentadoria</option>
          <option value="28">28 - Por morte, do Regime Geral (Decreto 20465/31)</option>
          <option value="29">29 - Por morte de ex-combatente marítimo (Lei 1756/52)</option>
          <option value="30">30 - Renda mensal vitalícia por incapacidade</option>
          <option value="32">32 - Por invalidez previdenciária (LOPS)</option>
          <option value="33">33 - Por invalidez de aeronauta</option>
          <option value="34">34 - Por invalidez de ex-combatente marítimo (Lei 1.756/52)</option>
          <option value="37">37 - Aposentadoria de extranumerário da União (EPU)</option>
          <option value="38">38 - Aposentadoria da extinta CAPIN (EPU)</option>
          <option value="40">40 - Renda mensal vitalícia por idade</option>
          <option value="41">41 - Por idade (LOPS)</option>
          <option value="42">42 - Por tempo de contribuição previdenciária</option>
          <option value="43">43 - Por tempo de contribuição de ex-combatente</option>
          <option value="44">44 - Por tempo de contribuição de aeronauta</option>
          <option value="45">45 - Por tempo de contribuição de jornalista profissional</option>
          <option value="46">46 - Por tempo de contribuição especial</option>
          <option value="49">49 - Por tempo de contribuição ordinária</option>
          <option value="51">51 - Aposentadoria por invalidez (Extinto Plano Básico)</option>
          <option value="52">52 - Por idade (Extinto plano Básico)</option>
          <option value="54">54 - Pensão especial vitalícia (Lei 9793/99) (EPU)</option>
          <option value="55">55 - Por morte (Extinto Plano Básico)</option>
          <option value="56">56 - Pensão mensal vitalícia por síndrome de talidomida (Lei 7070/82)</option>
          <option value="57">57 - Por tempo de contribuição de professores (EC/CF 18/81)</option>
          <option value="58">58 - Aposentadoria excepcional do anistiado (Lei 6683/79) (EPU)</option>
          <option value="59">59 - Por morte excepcional do anistiado (Lei 6683/79) (EPU)</option>
          <option value="60">60 - Pensão especial mensal vitalícia (Lei 10.923/04)</option>
          <option value="72">72 - Por tempo de contribuição de ex-combatente marítimo (Lei 1756/52)</option>
          <option value="78">78 - Por idade de ex-combatente marítimo (Lei 1.756/52)</option>
          <option value="81">81 - Por idade compulsória (Ex-SASSE)</option>
          <option value="82">82 - Por tempo de contribuição (Ex-SASSE)</option>
          <option value="83">83 - Aposentadoria por invalidez (Ex-SASSE)</option>
          <option value="84">84 - Por morte (Ex-SASSE)</option>
          <option value="87">87 - Amparo assistencial ao portador de deficiência (LOAS)</option>
          <option value="88">88 - Amparo assistencial ao idoso (LOAS)</option>
          <option value="89">89 - Pensão especial aos dependentes de vítimas fatais por contaminação na hemodiálise (EPU)</option>
          <option value="92">92 - Aposentadoria por invalidez por acidente do trabalho</option>
          <option value="93">93 - Pensão por morte por acidente do trabalho</option>
          <option value="94">94 - Auxílio-acidente por acidente do trabalho</option>
          <option value="96">96 - Pensão especial para pessoas atingidas por Hanseníase</option>
      </select>
      `
      label.innerHTML = '<label id="label_agency_code" for="agency_code">Espécie</label>'
    }else{
      agency_code_div.innerHTML = `
        <input class="form-control form-control-sm" type="text"></input>
      `
      label.innerHTML = '<label id="label_agency_code" for="agency_code">Secretaria</label>'
    }
}

function validateForm() {
    const fields = [
        { id: "code-partner", name: "Código do Parceiro" },
        { id: "name-partner", name: "Nome do Parceiro" },
        { id: "cpf", name: "CPF" },
        { id: "name", name: "Nome do Cliente" },
        { id: "birthdate", name: "Data de Nascimento" },
        { id: "rg_created_date", name: "Data de Emissão do RG" },
        { id: "rg", name: "Número do RG" },
        { id: "rg_public_agency", name: "Órgão Emissor do RG" },
        { id: "rg_uf", name: "UF do RG" },
        { id: "naturality_city", name: "Cidade de Naturalidade" },
        { id: "naturality_uf", name: "UF de Naturalidade" },
        { id: "sex", name: "Sexo" },
        { id: "is_foreigner", name: "É Estrangeiro" },
        { id: "mother", name: "Nome da Mãe" },
        { id: "father", name: "Nome do Pai" },
        { id: "telphone", name: "Telefone" },
        { id: "celphone", name: "Celular" },
        { id: "email", name: "E-mail" },
        { id: "illiterate", name: "Analfabeto" },
        { id: "postal_code", name: "CEP" },
        { id: "place", name: "Endereço" },
        { id: "house_number", name: "Número da Casa" },
        { id: "complement", name: "Complemento" },
        { id: "city", name: "Cidade" },
        { id: "city_state", name: "Estado" },
        { id: "district", name: "Bairro" },
        { id: "agency", name: "Convênio" },
        { id: "agency_id", name: "Matrícula" },
        { id: "agency_uf", name: "UF da Agência" },
        { id: "income", name: "Renda" },
        { id: "agency_is_cm", name: "Cartão Magnético" },
        { id: "agency_code", name: "Espécie" },
        { id: "account_type", name: "Tipo de Conta" },
        { id: "account_bank", name: "Banco Recebimento" },
        { id: "account_agency", name: "Agência da Conta" },
        { id: "account", name: "Conta" },
        { id: "account_dv", name: "Dígito Verificador da Conta" },
    ];

    let isValid = true;

    fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        if (inputElement) {
            const value = inputElement.value.trim();
            if (!value || value === '-') {
                inputElement.classList.add("is-invalid");
                isValid = false;

                addNewToast("danger", `${field.name} é obrigatório`);

                inputElement.addEventListener("blur", () => {
                    inputElement.classList.remove("is-invalid");
                    inputElement.classList.add("form-control", "form-control-sm");
                });
            } else {
                inputElement.classList.remove("is-invalid");
                inputElement.classList.add("form-control", "form-control-sm");
            }
        }
    });

    return isValid;
}

document.getElementById("btn-sender").addEventListener("click", (e) => {
    if (!validateForm()) {
        e.preventDefault();
    }else {
        window.print();
        saveClientData();
    }
});

let representante = document.getElementById("representante");
representante.addEventListener("change", representanteHandler);

let agency = document.getElementById("agency");
agency.addEventListener("change", convenioHandler);

function operationHandler(){
    const operation = document.getElementById('operation');
    const divMargem = document.getElementById('operation-margem');
    const divRefin = document.getElementById('operation-refin');
    const divPortRefin = document.getElementById('operation-port');
    const divCard = document.getElementById('operation-cartao');
    const divSaqueFGTS = document.getElementById('operation-fgts');

    if(operation.value == 0 || operation.value == 7){
        divMargem.style.display = 'block';
        divPortRefin.style.display = 'none';
        divRefin.style.display = 'none';
        divCard.style.display = 'none';
        divSaqueFGTS.style.display = 'none';
    }
    if(operation.value == 6){
        divPortRefin.style.display = 'block';
        divMargem.style.display = 'none';
        divRefin.style.display = 'none';
        divCard.style.display = 'none';
        divSaqueFGTS.style.display = 'none';
        document.getElementById("table_refin").style.display = 'block';
        document.getElementById("lbl-refin").style.display = 'block';
    }
    if(operation.value == 5){
        divPortRefin.style.display = 'block';
        divMargem.style.display = 'none';
        divRefin.style.display = 'none';
        divCard.style.display = 'none';
        divSaqueFGTS.style.display = 'none';
        document.getElementById("table_refin").style.display = 'none';
        document.getElementById("lbl-refin").style.display = 'none';
    }
    if(operation.value == 1 || operation.value == 2){
        divRefin.style.display = 'block';
        divPortRefin.style.display = 'none';
        divMargem.style.display = 'none';
        divCard.style.display = 'none';
        divSaqueFGTS.style.display = 'none';
        document.getElementById("table_refin").style.display = 'none';
        document.getElementById("lbl-refin").style.display = 'none';
    }
    if(operation.value == 3 || operation.value == 4){
        divCard.style.display = 'block';
        divRefin.style.display = 'none';
        divPortRefin.style.display = 'none';
        divMargem.style.display = 'none';
        divSaqueFGTS.style.display = 'none';
    }
    if(operation.value == 8 || operation.value == 8){
        divSaqueFGTS.style.display = 'block';
        divCard.style.display = 'none';
        divRefin.style.display = 'none';
        divPortRefin.style.display = 'none';
        divMargem.style.display = 'none';
    }
}

document.getElementById('operation').addEventListener("change", operationHandler);

function saveClientData() {
    const data = {
      cpf: document.getElementById("cpf").value.replace(/[.\-\s]/g, ""),
      name: document.getElementById("name").value,
      birthdate: document.getElementById("birthdate").value,
      rg: document.getElementById("rg").value,
      rg_public_agency: document.getElementById("rg_public_agency").value,
      rg_uf: document.getElementById("rg_uf").value,
      naturality_city: document.getElementById("naturality_city").value,
      naturality_uf: document.getElementById("naturality_uf").value,
      rg_created_date: document.getElementById("rg_created_date").value,
      sex: document.getElementById("sex").value,
      is_foreigner: document.getElementById("is_foreigner").value,
      mother: document.getElementById("mother").value,
      father: document.getElementById("father").value,
      telphone: document.getElementById("telphone").value,
      celphone: document.getElementById("celphone").value,
      email: document.getElementById("email").value,
      is_illiterate: document.getElementById("illiterate").value,
      postal_code: document.getElementById("postal_code").value,
      place: document.getElementById("place").value,
      house_number: document.getElementById("house_number").value,
      complement: document.getElementById("complement").value,
      city: document.getElementById("city").value,
      city_state: document.getElementById("city_state").value,
      district: document.getElementById("district").value,
      agency: document.getElementById("agency").value,
      agency_id: parseInt(document.getElementById("agency_id").value),
      agency_uf: document.getElementById("agency_uf").value,
      income: parseFloat(document.getElementById("income").value),
      agency_is_cm: document.getElementById("agency_is_cm").value,
      agency_code: document.getElementById("agency_code").value,
      is_representated: document.getElementById("representante").value,
      rep_cpf: document.getElementById("rep_cpf").value,
      rep_name: document.getElementById("rep_name").value,
      account_type: document.getElementById("account_type").value,
      account_bank: document.getElementById("account_bank").value,
      account_agency: parseInt(document.getElementById("account_agency").value),
      account: parseInt(document.getElementById("account").value),
      account_dv: parseInt(document.getElementById("account_dv").value),
    };
  
    let clients = JSON.parse(localStorage.getItem("clients")) || [];
  
    const existingClient = clients.find(client => client.cpf === data.cpf);
    if (existingClient) {
      return;
    }

    clients.push(data);

    localStorage.setItem("clients", JSON.stringify(clients));
}

function searchClientByCPF() {
    let cpfInput = document.getElementById("cpf").value;
    cpfInput = cpfInput.replace(/[.\-\s]/g, "");
    const clients = JSON.parse(localStorage.getItem("clients")) || [];
    const client = clients.find(c => c.cpf === cpfInput);

    if (client) {
      document.getElementById("cpf").value = client.cpf;
      document.getElementById("name").value = client.name;
      document.getElementById("birthdate").value = client.birthdate;
      document.getElementById("rg").value = client.rg;
      document.getElementById("rg_public_agency").value = client.rg_public_agency;
      document.getElementById("rg_uf").value = client.rg_uf;
      document.getElementById("naturality_city").value = client.naturality_city;
      document.getElementById("naturality_uf").value = client.naturality_uf;
      document.getElementById("rg_created_date").value = client.rg_created_date;
      document.getElementById("sex").value = client.sex;
      document.getElementById("is_foreigner").value = client.is_foreigner;
      document.getElementById("mother").value = client.mother;
      document.getElementById("father").value = client.father;
      document.getElementById("telphone").value = client.telphone;
      document.getElementById("celphone").value = client.celphone;
      document.getElementById("email").value = client.email;
      document.getElementById("illiterate").value = client.is_illiterate;
      document.getElementById("postal_code").value = client.postal_code;
      document.getElementById("place").value = client.place;
      document.getElementById("house_number").value = client.house_number;
      document.getElementById("complement").value = client.complement;
      document.getElementById("city").value = client.city;
      document.getElementById("city_state").value = client.city_state;
      document.getElementById("district").value = client.district;
      document.getElementById("agency").value = client.agency;
      document.getElementById("agency_id").value = client.agency_id;
      document.getElementById("agency_uf").value = client.agency_uf;
      document.getElementById("income").value = client.income;
      document.getElementById("agency_is_cm").value = client.agency_is_cm;
      document.getElementById("agency_code").value = client.agency_code;
      document.getElementById("representante").value = client.is_representated;
      document.getElementById("rep_cpf").value = client.rep_cpf;
      document.getElementById("rep_name").value = client.rep_name;
      document.getElementById("account_type").value = client.account_type;
      document.getElementById("account_bank").value = client.account_bank;
      document.getElementById("account_agency").value = client.account_agency;
      document.getElementById("account").value = client.account;
      document.getElementById("account_dv").value = client.account_dv;
      } 
}
