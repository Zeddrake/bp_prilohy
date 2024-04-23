<script>
    // Exportované proměnné pro předání dat a funkcí z rodičovské komponenty
    export let task;        // Informace o konkrétním úkolu
    export let onDelete;    // Funkce pro smazání úkolu
    export let onComplete;  // Funkce pro označení úkolu jako dokončený/nedokončený

</script>

<div class="{task.completed ? 'completed' : ''}">
    <!-- Zobrazení názvu úkolu -->
    <span>{task.title}</span>
    <!-- Checkbox pro označení úkolu jako dokončený/nedokončený -->
    <input type="checkbox" checked="{task.completed}" on:change={onComplete}>
    <!-- Tlačítko pro smazání úkolu -->
    <button class="delete-btn" on:click={onDelete}>✖</button>
</div>

<style>
    /* Styl pro označení dokončených úkolů přeškrtnutím */
    .completed {
        text-decoration: line-through;
    }
    
    /* Styl pro tlačítko pro smazání úkolu */
    .delete-btn {
        background: none;
        border: none;
        color: red;
        font-size: 20px;
        cursor: pointer;
    }
</style>
