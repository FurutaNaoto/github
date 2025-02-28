// ソートするための記述
const table = document.getElementById('database-table');
let sortColumn = 0;
let ascending = true;

sortTable(sortColumn); // ページが開かれたときに初期状態としてDataID列を昇順ソート
updateSortIndicator(table.rows[0].cells[sortColumn], ascending); // 初期状態でのソートアイコンの表示を設定

for (let i = 0; i < table.rows[0].cells.length; i++) {
    const headerCell = table.rows[0].cells[i];
    headerCell.addEventListener('click', function() {
        if (sortColumn === i) {
            ascending = !ascending;
        } else {
            ascending = true;
            sortColumn = i;
        }
        sortTable(sortColumn);
        updateSortIndicator(headerCell, ascending);
    });
}

function sortTable(columnIndex) {
    const rows = Array.from(table.rows).slice(1); // ヘッダー行を除く
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();
        return ascending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });

    // テーブルを一旦クリア
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // ソート後の行を追加
    rows.forEach(row => table.appendChild(row));
}

function updateSortIndicator(headerCell, ascending) {
    // 全てのヘッダーセル内の矢印アイコンをリセット
    for (let i = 0; i < table.rows[0].cells.length; i++) {
        const headerCell = table.rows[0].cells[i];
        headerCell.innerHTML = headerCell.getAttribute('data-name_JaTXT');
    }
    // ヘッダーセル内の矢印アイコンを更新
    const indicator = ascending ? '↓' : '↑';
    headerCell.innerHTML = `${headerCell.getAttribute('data-name_JaTXT')} ${indicator}`;
}

// フィルタするための記述
const filterToolNameInput = document.getElementById('filter-tool-name');
const filterDescriptionInput = document.getElementById('filter-description');

filterToolNameInput.addEventListener('input', filterTable);
filterDescriptionInput.addEventListener('input', filterTable);

function filterTable() {
    const filterToolName = filterToolNameInput.value.toUpperCase();
    const filterDescription = filterDescriptionInput.value.toUpperCase();
    const rows = Array.from(table.rows).slice(1); // ヘッダー行を除く

    rows.forEach(row => {
        const toolName = row.cells[1].textContent.toUpperCase();
        const description = row.cells[3].textContent.toUpperCase();
        const number = row.cells[0].textContent; // 最初の列が「DataID」値を含むと仮定

        let shouldDisplay = true;

        // 名前と説明フィルタをチェック
        if (filterToolName && !toolName.includes(filterToolName)) {
            shouldDisplay = false;
        }
        if (filterDescription && !description.includes(filterDescription)) {
            shouldDisplay = false;
        }

        // 番号フィルタをチェック
        if (shouldDisplay) {
            if (document.getElementById('filter-type1').checked && number.startsWith('基')) {
                shouldDisplay = true;
            } else if (document.getElementById('filter-type2').checked && number.startsWith('D')) {
                shouldDisplay = true;
            } else if (document.getElementById('filter-type3').checked && number.startsWith('内')) {
                shouldDisplay = true;
            } else if (document.getElementById('filter-type4').checked && number.startsWith('他')) {
                shouldDisplay = true;
            } else {
                shouldDisplay = false;
            }
        }

        row.style.display = shouldDisplay ? '' : 'none';
    });

    updateCommandCount(); // コマンド数の更新
}

// 入力ボックスの内容をクリアし、テーブルの表示を更新する記述
const clearToolNameButton = document.getElementById('clear-tool-name');
const clearDescriptionButton = document.getElementById('clear-description');

clearToolNameButton.addEventListener('click', function() {
    filterToolNameInput.value = '';
    filterTable();
});

clearDescriptionButton.addEventListener('click', function() {
    filterDescriptionInput.value = '';
    filterTable();
});

// チェックボックスの変更時にフィルタリングを実行
document.getElementById('filter-type1').addEventListener('change', filterTable);
document.getElementById('filter-type2').addEventListener('change', filterTable);
document.getElementById('filter-type3').addEventListener('change', filterTable);
document.getElementById('filter-type4').addEventListener('change', filterTable);

// ページ読み込み時に初期状態でフィルタリングを実行し、コマンド数を更新
filterTable(); // 既存の初期フィルタリング呼び出し
updateCommandCount(); // フィルタリング後にコマンド数を更新


// コマンド数を表示する機能
function updateCommandCount() {
    const visibleRows = Array.from(table.rows).slice(1).filter(row => row.style.display !== 'none');
    const countElement = document.getElementById('command-count');
    countElement.textContent = visibleRows.length.toString();
}
