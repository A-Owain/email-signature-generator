from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    signature = None
    if request.method == 'POST':
        name = request.form.get('name')
        position = request.form.get('position')
        email = request.form.get('email')
        phone = request.form.get('phone')
        signature = {
            'name': name,
            'position': position,
            'email': email,
            'phone': phone
        }
    return render_template('index.html', signature=signature)

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))  # Use PORT env var if available (for deployment), else default to 5000
    app.run(host='0.0.0.0', port=port, debug=True)