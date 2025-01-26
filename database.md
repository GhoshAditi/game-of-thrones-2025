# Database Schema Reference

## Tables

### `events`
| Column               | Type        | Description                          |
|----------------------|-------------|--------------------------------------|
| id                   | uuid        | Unique event identifier             |
| event_category_id    | uuid        | Foreign key to event category       |
| name                 | varchar     | Event name                          |
| description          | text        | Detailed event description          |
| min_team_size        | int2        | Minimum participants per team       |
| max_team_size        | int2        | Maximum participants per team       |
| registration_fees    | int2        | Registration fee amount             |
| prize_pool           | int2        | Total prize money                   |
| schedule             | text        | Event timeline/schedule             |
| rules                | text        | Competition rules                   |
| reg_status           | bool        | Registration open/closed status     |
| image_url            | varchar     | URL for event banner                |
| coordinators         | jsonb       | Organizer contact details           |
| links                | jsonb       | Related URLs/resources              |

### `participants`
| Column       | Type        | Description                      |
|--------------|-------------|----------------------------------|
| team_id      | uuid        | Foreign key to teams            |
| name         | varchar     | Participant name                |
| phone        | text        | Contact number                  |
| email        | varchar     | Email address                   |

### `fests`
| Column       | Type        | Description                      |
|--------------|-------------|----------------------------------|
| id           | uuid        | Unique test identifier          |
| name         | text        | Test name                       |
| year         | int2        | Academic year                   |

### `teams`
| Column                     | Type           | Description                      |
|----------------------------|----------------|----------------------------------|
| team_id                    | uuid           | Unique team identifier          |
| event_id                   | uuid           | Foreign key to events           |
| transaction_id             | uuid           | Payment transaction ID          |
| team_name                  | text           | Team display name               |
| transaction_verified       | timestamptz    | Payment verification timestamp  |
| verification_mail_sent     | bool           | Email confirmation status       |
| referral_code              | varchar        | Unique referral code            |
| team_lead_phone            | text           | Leader's contact number         |
| team_lead_email            | text           | Leader's email                  |
| is_team                    | bool           | Team/individual flag            |
| college                    | text           | Institution name                |
| registered_at              | timestamptz    | Registration timestamp          |
| reg_model                  | text           | Registration type               |
| payment_mode               | text           | Payment method                  |
| attendance                 | bool           | Participation confirmation      |
| transaction_screenshot     | text           | Payment proof URL               |

### `users`
| Column           | Type        | Description                      |
|------------------|-------------|----------------------------------|
| id               | uuid        | Unique user identifier ( auth.users.id)          |
| email            | varchar     | User email address              |
| name             | varchar     | Full name                       |
| phone            | text        | Contact number                  |
| college          | text        | Institution name                |
| college_coli     | text        | College code (if applicable)    |
| course           | text        | Academic program                |
| stream           | text        | Specialization                  |
| gender           | text        | Gender information              |

### `events_categories`
| Column       | Type        | Description                      |
|--------------|-------------|----------------------------------|
| id           | uuid        | Unique category identifier      |
| fest_id      | uuid        | Foreign key to tests            |
| name         | varchar     | Category name                   |
| tagline      | varchar     | Short description               |
| convenors    | jsonb       | Organizer details               |

### `referral_codes`
| Column               | Type        | Description                      |
|----------------------|-------------|----------------------------------|
| community_name       | text        | Referral program name           |


erDiagram
  events ||--o{ event_categories : "belongs to"
  event_categories }o--|| fests : "part of"
  teams ||--o{ participants : "has"
  teams }o--|| events : "registers for"
  teams }o--|| referral_codes : "uses"
  users ||--o{ roles : "has"
  roles }o--|| defined_roles : "of type"
  roles }o--|| events : "for event"
  roles }o--|| event_categories : "for category"
