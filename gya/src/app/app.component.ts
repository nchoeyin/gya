import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gya';
  imagesUrls = [
    {
      title: '2011 GCM Cup winners',
      description: 'GCM Cup 2011',
      image: 'gya_football_green_jersey_2011_gcm_cup.jpeg',
    },
    {
      title: 'Players in Takseng Jersey',
      description: 'GYA football team in black jersey at Lhakhang',
      image: 'gya_black_jersey_takseng_lhakhang.jpeg',
    },
    {
      title: 'Players in Zomphel Jersey',
      description: 'GYA football team in front of gompa',
      image: 'gya_black_jersey_zomphel_infront_gompa.jpeg',
    },
    {
      title: 'South cup at TDL Ground, Bylakuppe',
      description: 'South cup tournament at TDL ground',
      image: 'gya_football_black_jersey_tdl_ground.jpeg',
    },
    {
      title: 'GCM team with His Holiness the Dalai Lama',
      description: 'Special audience with Dalai Lama',
      image: 'gya_football_blue_jersey_with_dalai_lama.jpeg',
    },
    {
      title: 'Players in Phurba International jersey',
      description: 'GYA football team at Lhakhang',
      image: 'gya_football_blue_white_jersey.jpeg',
    },
    {
      title: 'Football Miscellaneous',
      description: 'Various football moments',
      image: 'gya_football_misc.jpeg',
    },
    {
      title: 'Players with GYA executives and camp leaders',
      description: 'Players in front of Lhakhang',
      image: 'gya_football_players_infront_of_lhakhang_orange_jersey.jpeg',
    },
    {
      title: 'Players infront of Lhakhang',
      description: 'GYA team in red jersey',
      image: 'gya_football_redjersey_dandylala.jpeg',
    },
    {
      title: 'Lottery Ticket',
      description:
        'GYA lottery ticket which is drawn every year to raise funds for the football team',
      image: 'gya_lottery_ticket.jpeg',
    },
    {
      title: 'Inter GYA 5v5 Football Tournament',
      description: 'Inter GYA 5v5 Football Tournament event',
      image: 'gya_mini_football_tournament.jpeg',
    },
    {
      title: 'GYA boys chilling in Rumtak',
      description: 'players chilling in Rumtak after football tournament',
      image: 'gya_neon_jersey_in_rumtak.jpeg',
    },
    {
      title: 'Outdoor Gym Inauguration',
      description: 'MP attending inauguration',
      image: 'gya_outdoor_gym_inauguration_with_mp.jpeg',
    },
    {
      title: 'Finals of 2025 inter Lugsam football tournament',
      description:
        'Camp 5 vs camp 6 in the finals of 2025 inter Lugsam football tournament',
      image: 'gya_pink_white_jersey_football_tournament.jpeg',
    },
    {
      title: 'Uzen with Gold cup',
      description: 'Uzen team in green jersey',
      image: 'gya_uzen_football_green_jersey_2011_gcm_cup.jpeg',
    },
    {
      title: 'White Southcup Jersey',
      description: 'Southcup tournament',
      image: 'gya_white_southcup_jersey.jpeg',
    },
    {
      title: 'Junior boys football tournament',
      description: 'Junior boys football tournament at smaller football ground',
      image:
        'gya_youngboys_kunkhen_kungasherab_football_at_basketballground.jpeg',
    },
  ];
}
