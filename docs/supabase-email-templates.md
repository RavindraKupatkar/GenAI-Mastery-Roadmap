# Supabase Email Templates for Gen AI Mastery Hub

## How to Set Up Email Templates

1. Go to **Supabase Dashboard** → **Authentication** → **Email Templates**
2. For each template type below, copy and paste the HTML code
3. Click **Save**

---

## 1. Confirmation Email (Sign Up Verification)

### Subject Line:
```
🚀 Confirm your Gen AI Mastery Hub account
```

### HTML Body:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%); border-radius: 16px 16px 0 0; padding: 40px 30px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Gen AI Mastery Hub</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your AI Engineering Journey Begins</p>
    </div>
    
    <!-- Content -->
    <div style="background: white; padding: 40px 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">Welcome aboard! 🎉</h2>
      
      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        You're one click away from starting your 6-month transformation into a production-ready AI Engineer.
      </p>
      
      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
        Click the button below to verify your email and unlock your learning dashboard:
      </p>
      
      <!-- CTA Button -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 18px; font-weight: bold; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);">
          ✅ Verify My Email
        </a>
      </div>
      
      <!-- Motivational Quote -->
      <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 15px 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
        <p style="color: #1e40af; margin: 0; font-size: 14px; font-style: italic;">
          "🏎️ That BMW M5 won't buy itself. Master AI, land that dream job, and make it happen."
        </p>
      </div>
      
      <p style="color: #9ca3af; font-size: 14px; margin: 20px 0 0 0;">
        If the button doesn't work, copy and paste this link:<br>
        <a href="{{ .ConfirmationURL }}" style="color: #3b82f6; word-break: break-all;">{{ .ConfirmationURL }}</a>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
      <p style="margin: 0;">© 2026 Gen AI Mastery Hub. Transform your career in 6 months.</p>
    </div>
  </div>
</body>
</html>
```

---

## 2. Password Reset Email

### Subject Line:
```
🔐 Reset your Gen AI Mastery Hub password
```

### HTML Body:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%); border-radius: 16px 16px 0 0; padding: 40px 30px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Gen AI Mastery Hub</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Password Reset Request</p>
    </div>
    
    <!-- Content -->
    <div style="background: white; padding: 40px 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">Reset Your Password 🔑</h2>
      
      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Someone requested a password reset for your Gen AI Mastery Hub account. If this was you, click the button below:
      </p>
      
      <!-- CTA Button -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 18px; font-weight: bold; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);">
          🔐 Reset Password
        </a>
      </div>
      
      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
        <p style="color: #92400e; margin: 0; font-size: 14px;">
          ⚠️ If you didn't request this, you can safely ignore this email. Your password won't change.
        </p>
      </div>
      
      <p style="color: #9ca3af; font-size: 14px; margin: 20px 0 0 0;">
        This link expires in 24 hours.<br>
        <a href="{{ .ConfirmationURL }}" style="color: #3b82f6; word-break: break-all;">{{ .ConfirmationURL }}</a>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
      <p style="margin: 0;">© 2026 Gen AI Mastery Hub. Your AI Engineering journey awaits.</p>
    </div>
  </div>
</body>
</html>
```

---

## 3. Magic Link Email (Optional)

### Subject Line:
```
🔗 Your Gen AI Mastery Hub login link
```

### HTML Body:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%); border-radius: 16px 16px 0 0; padding: 40px 30px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Gen AI Mastery Hub</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Instant Login Link</p>
    </div>
    
    <!-- Content -->
    <div style="background: white; padding: 40px 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">Login Instantly ⚡</h2>
      
      <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
        Click below to log in to your Gen AI Mastery Hub account. No password needed!
      </p>
      
      <!-- CTA Button -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{ .ConfirmationURL }}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 18px; font-weight: bold; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);">
          🚀 Login Now
        </a>
      </div>
      
      <p style="color: #9ca3af; font-size: 14px; margin: 20px 0 0 0;">
        This link expires in 1 hour for security.<br>
        <a href="{{ .ConfirmationURL }}" style="color: #3b82f6; word-break: break-all;">{{ .ConfirmationURL }}</a>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
      <p style="margin: 0;">© 2026 Gen AI Mastery Hub. Master AI in 6 months.</p>
    </div>
  </div>
</body>
</html>
```

---

## Important: Update Redirect URL

In Supabase Dashboard → **Authentication** → **URL Configuration**:

Set **Site URL** to:
```
http://localhost:3001
```

Set **Redirect URLs** (add these):
```
http://localhost:3001
http://localhost:3001/auth/callback
```

This ensures the confirmation email links redirect to your local dev server correctly.
