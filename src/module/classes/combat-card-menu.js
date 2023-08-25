export default class CombatCardMenu extends FormApplication {
    constructor(...args) {
        super(...args);
    }
	
	const tokenTypes = {"Enemy", "Neutral", "Friendly", "Secret", "Hidden"};
	const displayChoices = {
		"GM": "SFRPG.Settings.CombatCards.DisplayValues.GM",
		"Assistant": "SFRPG.Settings.CombatCards.DisplayValues.Assistant",
		"Trusted": "SFRPG.Settings.CombatCards.DisplayValues.Trusted",
		"Player": "SFRPG.Settings.CombatCards.DisplayValues.Player"
	};
	const obfuscateChoices = {
		"Assistant": "SFRPG.Settings.CombatCards.ObfuscateValues.Assistant",
		"Trusted": "SFRPG.Settings.CombatCards.ObfuscateValues.Trusted",
		"Player": "SFRPG.Settings.CombatCards.ObfuscateValues.Player",
		"None": "SFRPG.Settings.CombatCards.ObfuscateValues.None"
	};
	const chatcardChoices = {
		"enabled": "SFRPG.Settings.CombatCards.Values.Enabled",
		"roundsPhases": "SFRPG.Settings.CombatCards.Values.RoundsPhases",
		"roundsTurns": "SFRPG.Settings.CombatCards.Values.RoundsTurns",
		"roundsOnly": "SFRPG.Settings.CombatCards.Values.OnlyRounds",
		"disabled": "SFRPG.Settings.CombatCards.Values.Disabled"
	};

    getData() {
        let data = super.getData();
		data.chatcardsAvailable = chatcardChoices;
		data.displayAvailable = displayChoices;
		data.obfuscateAvailable = obfuscateChoices;
		
		
		data.difficultyDisplay = game.settings.get("sfrpg", "difficultyDisplay");
		
		data.chatcardsNormal = game.settings.get("sfrpg", "normalChatCards");
		data.chatcardsStarship = game.settings.get("sfrpg", "normalChatCards");
		data.chatcardsVehicle = game.settings.get("sfrpg", "vehicleChaseChatCards");
		
		data.displayEnemy = game.settings.get("sfrpg", "EnemyDisplayCombatCards");
		data.displayNeutral = game.settings.get("sfrpg", "NeutralDisplayCombatCards");
		data.displayFriendly = game.settings.get("sfrpg", "FriendlyDisplayCombatCards");
		data.displaySecret = game.settings.get("sfrpg", "SecretDisplayCombatCards");
		data.displayHidden = game.settings.get("sfrpg", "HiddenDisplayCombatCards");
		
		data.obfuscateEnemy = game.settings.get("sfrpg", "EnemyObfuscateCombatCards");
		data.obfuscateNeutral = game.settings.get("sfrpg", "NeutralObfuscateCombatCards");
		data.obfuscateFriendly = game.settings.get("sfrpg", "FriendlyObfuscateCombatCards");
		data.obfuscateSecret = game.settings.get("sfrpg", "SecretObfuscateCombatCards");
		data.obfuscateHidden = game.settings.get("sfrpg", "HiddenObfuscateCombatCards");
		
		data.displayOwned = game.settings.get("sfrpg", "displayOwnedCombatCards");

        return data;
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['form'],
            popOut: true,
            template: `systems/sfrpg/templates/apps/combatcards.hbs`,
            id: 'combat-cards',
            title: 'SFRPG.Settings.CombatCards.ConfigureLabel',
            width: 700
        });
    }

    activateListeners(html) {
        super.activateListeners(html);
    }

    async _updateObject(event, formData) {
        await Promise.all([
			game.settings.set("sfrpg", "difficultyDisplay", formData["difficulty-display"]),
            game.settings.set("sfrpg", "normalChatCards", formData["chatcards-normal"]),
            game.settings.set("sfrpg", "starshipChatCards", formData["chatcards-starship"]),
            game.settings.set("sfrpg", "vehicleChaseChatCards", formData["chatcards-vehicle"]),
			game.settings.set("sfrpg", "EnemyDisplayCombatCards", formData["display-enemy"]),
			game.settings.set("sfrpg", "NeutralDisplayCombatCards", formData["display-neutral"]),
			game.settings.set("sfrpg", "FriendlyDisplayCombatCards", formData["display-friendly"]),
			game.settings.set("sfrpg", "SecretDisplayCombatCards", formData["display-secret"]),
			game.settings.set("sfrpg", "HiddenDisplayCombatCards", formData["display-hidden"]),
			game.settings.set("sfrpg", "EnemyObfuscateCombatCards", formData["obfuscate-enemy"]),
			game.settings.set("sfrpg", "NeutralObfuscateCombatCards", formData["obfuscate-neutral"]),
			game.settings.set("sfrpg", "FriendlyObfuscateCombatCards", formData["obfuscate-friendly"]),
			game.settings.set("sfrpg", "SecretObfuscateCombatCards", formData["obfuscate-secret"]),
			game.settings.set("sfrpg", "HiddenObfuscateCombatCards", formData["obfuscate-hidden"]),        
			game.settings.set("sfrpg", "DisplayOwned", formData["obfuscate-hidden"]),
			game.settings.set("sfrpg", "displayOwnedCombatCards", formData["display-owned"])
		]);
    }
}
