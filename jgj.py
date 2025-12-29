import random

def player(prev_play, opponent_history=[]):
    # Track opponent's moves
    if prev_play:
        opponent_history.append(prev_play)
    
    # If it's the first game, pick a random move
    if not opponent_history:
        return random.choice(["R", "P", "S"])
    
    # Analyze opponent's last move and decide next move
    if opponent_history[-1] == "R":
        return "P"  # Paper beats Rock
    elif opponent_history[-1] == "P":
        return "S"  # Scissors beats Paper
    else:
        return "R"  # Rock beats Scissors
