library(tidyverse)
library(ggrepel)
library(ggimage)
library(nflfastR)
options(scipen=9999)

data <- load_pbp(2000:2021)
games <- transform(data, homeLead = total_home_score - total_away_score)
games <- transform(data, homeLeadFinal = home_score - away_score)

lead <- 25

best_comebacks <- games %>%
  filter((homeLead >= lead & homeLeadFinal < 0) | (homeLead <= -lead & homeLeadFinal > 0))
best_comebacks <- best_comebacks %>%
  group_by(old_game_id) %>%
  arrange(desc(game_date)) %>%
  filter(row_number()==1) %>%
  select(old_game_id, away_team, home_team, week, game_date)

data