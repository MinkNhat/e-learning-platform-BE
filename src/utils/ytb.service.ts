import { BadRequestException, Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class YtbService {
  private youtube = google.youtube({
    version: 'v3',
    auth: process.env.YTB_API_KEY,
  });

  async getVideoInfo(url: string) {
    const videoId = this.extractVideoId(url);

    if (!videoId) {
      throw new BadRequestException('Invalid YouTube URL');
    }

    const response = await this.youtube.videos.list({
      id: [videoId],
      part: ['snippet', 'contentDetails'],
    });

    const video = response.data.items?.[0];

    if (!video) {
      throw new BadRequestException('Video not found');
    }

    return {
      videoId,
      title: video.snippet?.title,
      thumbnail:
        video.snippet?.thumbnails?.high?.url ||
        video.snippet?.thumbnails?.default?.url,
      duration: this.formatDuration(
        video.contentDetails?.duration || '',
      ),
    };
  }

  private extractVideoId(url: string): string | null {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/,
    );

    return match ? match[1] : null;
  }

  private formatDuration(duration: string): string {
    const match = duration.match(
      /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/,
    );

    const hours = Number(match?.[1] || 0);
    const minutes = Number(match?.[2] || 0);
    const seconds = Number(match?.[3] || 0);

    return [hours, minutes, seconds]
      .map((v) => v.toString().padStart(2, '0'))
      .join(':');
  }
}